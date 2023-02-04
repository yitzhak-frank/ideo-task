using InvoiceManager.BL.Services;
using InvoiceManager.Models.Objects;
using Newtonsoft.Json;

namespace InvoiceManager.DAL
{
    public class DataManager
    {
        private static readonly string FilePath = $"{Configuration.BaseDir}/data.json";
        public static readonly List<Invoice> Data = LoadData();

        private static List<Invoice> LoadData()
        {
            string dataStr = File.ReadAllText(FilePath);
            List<Invoice> data = JsonConvert.DeserializeObject<List<Invoice>>(dataStr);
            return data;
        }

        public static List<Invoice> GetAll() => Data;

        public static Invoice GetById(int id) =>
            Data.Find(i => i.Id == id);

        public static bool Add(Invoice invoice)
        {
            if (invoice is null)
                return false;
            SetNewItemIdAndDate(invoice);
            Data.Add(invoice);
            UpdateDataFile();
            return true;
        }

        private static void SetNewItemIdAndDate(Invoice invoice)
        {
            int lastId = Data.OrderByDescending(i => i.Id).FirstOrDefault()?.Id ?? 0;
            invoice.Id = lastId + 1;
            invoice.Date = DateTime.Now;
        }

        public static bool Edit(Invoice newI)
        {
            Invoice oldI = Data.Find(i => i.Id == newI?.Id);
            if (newI is null || oldI is null)
                return false;
            Data[Data.IndexOf(oldI)] = newI;
            UpdateDataFile();
            return true;
        }

        public static bool Delete(int id)
        {
            Invoice invoice = Data.Find(i => i.Id == id);
            if (invoice is null) 
                return false;
            Data.Remove(invoice);
            UpdateDataFile();
            return true;
        }

        private static void UpdateDataFile()
        {
            string dataStr = JsonConvert.SerializeObject(Data);
            File.WriteAllText(FilePath, dataStr);
        }
    }
}
