using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExerciceTrousse
{
    abstract class Trousse
    {
        private int volume;
        private bool estOuverte;

        public Trousse(int volume)
        {

        }

        public void Ouvrir()
        {

        }

        public void Fermer()
        {

        }

        public int Volume
        {
            get { return volume; }
            private set { volume = value; }
        }

        
    }
}
