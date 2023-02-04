using Newtonsoft.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
    options.AddDefaultPolicy(policy =>
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));

builder.Services.AddMvc().AddJsonOptions(opts =>
    opts.JsonSerializerOptions.PropertyNamingPolicy = null);

var app = builder.Build();

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.UseCors();

app.Use(async (context, next) =>
{
    await next();

    if (context.Response.StatusCode == 404 && !context.Request.Path.Value.StartsWith("/api"))
    {
        context.Request.Path = string.Empty;
        context.Response.StatusCode = 200;
        await next();
    }
});

app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();
