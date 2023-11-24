using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GREF.Shared.Entities
{
    public class Users
    {
        public int Id { get; set; }
        public string TipoDocumento { get; set; } = null!;
        public string NumeroDocumento { get; set; } = null!;
        public string Nombres { get; set; } = null!;
        public string PrimerApellido { get; set; } = null!;
        public string SegundoApellido { get; set; } = null!;
        public string Telefono { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Tipo { get; set; } = null!;
        public string Pwd { get; set; } = null!;
        public string EstadoUsuario { get; set; } = null!;
        public string GrupoAhorro { get; set; } = null!;
    }
}
