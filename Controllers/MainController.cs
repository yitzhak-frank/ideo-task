using InvoiceManager.DAL;
using InvoiceManager.Models.Objects;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InvoiceManager.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class MainController : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<Invoice>> GetAll() =>
            DataManager.GetAll();

        [HttpGet]
        [Route("{id}")]
        public ActionResult<Invoice> GetById(int id) =>
            Ok(DataManager.GetById(id));

        [HttpPost]
        public ActionResult<bool> Add([FromBody] Invoice invoice) =>
            Ok(DataManager.Add(invoice));

        [HttpPut]
        public ActionResult<bool> Edit([FromBody] Invoice invoice) =>
            Ok(DataManager.Edit(invoice));

        [HttpDelete]
        [Route("{id}")]
        public ActionResult<bool> Delete(int id) =>
            Ok(DataManager.Delete(id));
    }
}
