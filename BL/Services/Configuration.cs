using System;
using System.IO;
using Microsoft.Extensions.Configuration;

namespace InvoiceManager.BL.Services
{
    public static class Configuration
    {
        public static IConfiguration AppSetting { get; }
        public static string BaseDir { get; }

        static Configuration()
        {
            BaseDir = Directory.GetCurrentDirectory();
            AppSetting = new ConfigurationBuilder()
                .SetBasePath(BaseDir)
                .AddJsonFile("appsettings.json")
                .Build();
        }
    }

}