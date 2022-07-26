const Respuesta = () => {
  return (
    <>
      <html class="h-screen bg-white">
        <body class="h-screen">
          <div className="min-h-full flex">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
              <div className="mx-auto w-full max-w-sm lg:w-96">
                <div>
                  <img
                    className="h-12 w-auto"
                    src="https://imgur.com/PWAcTxR.png"
                    alt="Iktan Protect"
                  />
                  <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
                    !Formulario Enviado!
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Gracias por responder tú evaluación diagnostica,{" "}
                    <a
                      href="#"
                      className="font-medium text-amber-600 hover:text-amber-500"
                    >
                      mantente al pendiente de las instrucciones de tu asesor.
                    </a>
                  </p>
                </div>

                <div className="mt-8">


                  <div className="mt-6"></div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative w-0 flex-1">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://imgur.com/IOTlo0c.png"
                alt=""
              />
            </div>
          </div>
        </body>
      </html>
    </>
  );
};

export default Respuesta;
