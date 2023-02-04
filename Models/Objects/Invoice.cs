using InvoiceManager.Models.Enums;

namespace InvoiceManager.Models.Objects
{
    public class Invoice
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public Status Status { get; set; }
        public int Amount { get; set; }
    }
}
