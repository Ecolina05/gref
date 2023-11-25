using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GREF.Shared.Entities
{
    public class Grupos
    {
        public int Id { get; set; }

        public string NombreGrupo { get; set; } = null!;
        public string Descripcion { get; set; } = null!;
    }
}
