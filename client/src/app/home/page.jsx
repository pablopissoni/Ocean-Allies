import Image from "next/image";


export default function Home() {
  return (
    <div className="container m-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-3">
        <div className="col-span-1">
          {/* Contenido de la primera columna */}
          <div
            className="h-64 bg-cover bg-center"
            style={{ backgroundImage: "url(/img/delfin.jpg)" }}
          >
            <h1 className="text-white text-2xl p-4">
              ONG dedicada a la protección y conservación del mundo marino.
            </h1>
          </div>
        </div>
        <div className="col-span-1">
          {/* Contenido de la segunda columna */}
          <div
            className="h-64 bg-cover bg-center"
            style={{ backgroundImage: "url(/img/foca.jpg)" }}
          >
            <h1 className="text-white text-2xl p-4">
              Nuestra ONG se dedica a la investigación y monitoreo de especies marinas.
            </h1>
          </div>
        </div>
        <div className="col-span-1">
          {/* Contenido de la tercera columna */}
          <div
            className="h-64 bg-cover bg-center"
            style={{ backgroundImage: "url(/img/tiburon.jpg)" }}
          >
            <h1 className="text-white text-2xl p-4">
              Campañas de concienciación y programas educativos.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
































