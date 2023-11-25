using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GREF.Shared.Entities
{
    public class Aportes
    {
        public int Id { get; set; }

        public string IdUser { get; set; } = null!;

        public string Periodicidad { get; set; } = null!;
        public string Meta { get; set; } = null!;
        public string Estado { get; set; } = null!;
        public string Duracion { get; set; } = null!;
        public string Fecha { get; set; } = null!;

    }
}
