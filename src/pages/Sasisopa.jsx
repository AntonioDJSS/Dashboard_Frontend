import axios from "axios";
import clienteAxios from "../config/axios";
import { useNavigate } from "react-router-dom";
import Final from "../components/Final";

import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MailIcon, MenuIcon, PhoneIcon, XIcon } from "@heroicons/react/outline";

const navigation = [{ name: "IKTAN TRAINING", href: "#" }];

export default function Sisasopa() {

  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [respuesta01, setRespuesta01] = useState("");
  const [respuesta02, setRespuesta02] = useState("");
  const [respuesta03, setRespuesta03] = useState("");
  const [respuesta04, setRespuesta04] = useState("");
  const [respuesta05, setRespuesta05] = useState("");
  const [respuesta06, setRespuesta06] = useState("");
  const [respuesta07, setRespuesta07] = useState("");
  const [respuesta08, setRespuesta08] = useState("");
  const [respuesta09, setRespuesta09] = useState("");
  const [respuesta10, setRespuesta10] = useState("");
  const [respuesta11, setRespuesta11] = useState("");
  const [respuesta12, setRespuesta12] = useState("");
  const [respuesta13, setRespuesta13] = useState("");
  const [respuesta14, setRespuesta14] = useState("");
  const [respuesta15, setRespuesta15] = useState("");
  const [respuesta16, setRespuesta16] = useState("");
  const [respuesta17, setRespuesta17] = useState("");
  let navigate = useNavigate();


  //
  const handleSubmit = async (e) => {
    console.log(e.target.value);
    
    //crear el usuario en la api
    try {
      navigate("finalizado");

      const respuesta = await clienteAxios.post("/sasisopa", {
        nombre,
        apellido,
        email,
        respuesta01,
        respuesta02,
        respuesta03,
        respuesta04,
        respuesta05,
        respuesta06,
        respuesta07,
        respuesta08,
        respuesta09,
        respuesta10,
        respuesta11,
        respuesta12,
        respuesta13,
        respuesta14,
        respuesta15,
        respuesta16,
        respuesta17,
      });
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white">
      <Popover as="header" className="relative">
        <div className="bg-warm-gray-50">
          <nav
            className="mb-5 relative max-w-7xl mx-auto flex items-center justify-between pt-6 px-6 xl:px-8"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className=" flex items-center justify-between w-full lg:w-auto">
                <a href="#">
                  <span className="sr-only text-gray-700">Iktan Training</span>
                  <img
                    className="h-10 w-auto sm:h-10"
                    src="https://i.imgur.com/PWAcTxR.png"
                    alt=""
                  />
                </a>
                <div className="-mr-2 flex items-center lg:hidden">
                  <Popover.Button className="bg-warm-gray-50 rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-amber-500">
                    <span className="sr-only"></span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-10 lg:flex lg:ml-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top lg:hidden"
          >
            <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://i.imgur.com/PWAcTxR.png"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main className="overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50">
          <div className="py-24 lg:py-32">
            <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
              <p className="mb-6  text-xl text-gray-500 max-w-3xl">
                Analisis de riesgo para el sector hidrocarburos.
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Evaluación Diagnostica
              </h1>
              <p className="mt-6  text-xl text-gray-500 max-w-3xl">
                A continuación se le presentan una serie de reactivos con los
                que se busca evaluar el nivel de entendimiento del curso. Lea
                detenidamente cada enunciado y las cuestiones planteadas.
                Responda la totalidad de la evaluación buscando plasmar la mejor
                respuesta a cada pregunta.
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <section
          className="relative bg-white"
          aria-labelledby="contact-heading"
        >
          <div
            className="absolute w-full h-1/2 bg-gray-50"
            aria-hidden="true"
          />
          {/* Decorative dot pattern */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <svg
              className="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-xl">
              <h2 id="contact-heading" className="sr-only">
                Contact us
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact information */}
                <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-amber-500 to-amber-600 sm:px-10 xl:p-12">
                  {/* Decorative angle backgrounds */}
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    IKTAN TRAINING
                  </h3>
                  <p className="mt-6 text-base text-amber-50 max-w-3xl">
                    ¿Tienes un problema con tu formulario? Contactanos por los
                    siguientes medios para darte una solución optima.
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-amber-50">
                      <PhoneIcon
                        className="flex-shrink-0 w-6 h-6 text-amber-200"
                        aria-hidden="true"
                      />
                      <span className="ml-3">+52 (55) 8734 6677</span>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-amber-50">
                      <MailIcon
                        className="flex-shrink-0 w-6 h-6 text-amber-200"
                        aria-hidden="true"
                      />
                      <span className="ml-3">support@iktanst.com</span>
                    </dd>
                  </dl>
                  <ul role="list" className="mt-8 flex space-x-12">
                    <li>
                      <a
                        className="text-amber-200 hover:text-amber-100"
                        href="#"
                      >
                        <span className="sr-only">GitHub</span>
                        <svg
                          className="w-7 h-7"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* FORMULARIO */}
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                    <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                      <div>
                        <div className="flex justify-between">
                          <label className="block text-sm font-medium text-gray-900">
                            Nombre/s
                          </label>
                          <span className="text-sm text-gray-500">
                            Obligatorio
                          </span>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <label className="block text-sm font-medium text-gray-900">
                            Apellido/s
                          </label>
                          <span className="text-sm text-gray-500">
                            Obligatorio
                          </span>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label className="block text-sm font-medium text-gray-900">
                            Correo Electronico
                          </label>
                          <span className="text-sm text-gray-500">
                            Obligatorio
                          </span>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                        <div class="mt-5 relative py-4">
                          <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-b border-amber-500"></div>
                          </div>
                          <div class="relative flex justify-center">
                            <span class="bg-white px-4 text-sm text-amber-500">
                              Inicio de evaluación
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* PREGUNTA 01 */}
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label className="block text-sm font-medium text-gray-900">
                            ¿Qué personas deberán formar por excelencia parte
                            del Grupo Multidisciplinario encargado de la
                            elaboración del Análisis de Riesgos para el Sector
                            Hidrocarburos?
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={respuesta01}
                            onChange={(e) => setRespuesta01(e.target.value)}
                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      {/* PREGUNTA 01 */}
                      {/* PREGUNTA 02 */}
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label className="block text-sm font-medium text-gray-900">
                            ¿A qué se le llama nivel de seguridad aceptable?
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={respuesta02}
                            onChange={(e) => setRespuesta02(e.target.value)}
                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      {/* PREGUNTA 02 */}
                      {/* PREGUNTA 03 */}
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label className="block text-sm font-medium text-gray-900">
                            ¿Qué es seguridad de proceso?
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={respuesta03}
                            onChange={(e) => setRespuesta03(e.target.value)}
                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      {/* PREGUNTA 03 */}
                      {/* PREGUNTA 04 */}
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-900"
                          >
                            ¿Qué es seguridad de higiene?
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={respuesta04}
                            onChange={(e) => setRespuesta04(e.target.value)}
                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      {/* PREGUNTA 04 */}
                      {/* PREGUNTA 05 */}
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label className="block text-sm font-medium text-gray-900">
                            Defina con sus propias palabras cultura
                            organizacional. ¿Cómo impacta la cultura
                            organizacional al proyecto y a la empresa?
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={respuesta05}
                            onChange={(e) => setRespuesta05(e.target.value)}
                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      {/* PREGUNTA 05 */}
                      {/* PREGUNTA 06 */}
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-900"
                          >
                            Seleccione la opción más adecuada: La correcta
                            identificación de peligros es la parte medular de un
                            Análisis de Riesgos:
                          </label>
                        </div>
                        <div className="">
                          <div className="">
                            <ul className="mt-3 flex">
                              <li className="flex hover:bg-gray-50 cursor-pointer">
                                <input
                                  name="pregunta06"
                                  value="Verdadero"
                                  type="radio"
                                  className=" appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                  onChange={(e) =>
                                    setRespuesta06(e.target.value)
                                  }
                                />
                                <span className=" block text-sm  text-gray-500">
                                  Verdadero
                                </span>
                              </li>
                              <li className="flex hover:bg-gray-50 cursor-pointer">
                                <input
                                  name="pregunta06"
                                  value="Falso"
                                  type="radio"
                                  className="mx-6 appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                  onChange={(e) =>
                                    setRespuesta06(e.target.value)
                                  }
                                />
                                <span className=" block text-sm  text-gray-500">
                                  Falso
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* PREGUNTA 06 */}
                      {/* PREGUNTA 07 */}
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label className="block text-sm font-medium text-gray-900">
                            ¿Qué es el análisis causa raíz y para qué se emplea?
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={respuesta07}
                            onChange={(e) => setRespuesta07(e.target.value)}
                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      {/* PREGUNTA 07 */}
                      {/* PREGUNTA 08 */}
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label className="block text-sm font-medium text-gray-900">
                            Mencione las cuatro formas en que se presenta un
                            peligro
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={respuesta08}
                            onChange={(e) => setRespuesta08(e.target.value)}
                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      {/* PREGUNTA 08 */}
                      {/* PREGUNTA 09 */}
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label className="block text-sm font-medium text-gray-900">
                            Mencione las características del riesgo primario y
                            del riesgo residual
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={respuesta09}
                            onChange={(e) => setRespuesta09(e.target.value)}
                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      {/* PREGUNTA 09 */}
                      {/* PREGUNTA 10 */}
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label className="block text-sm font-medium text-gray-900">
                            Mencione los elementos vulnerables que son
                            directamente impactados por las actividades de una
                            empresa en caso que ocurrencia de evento
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={respuesta10}
                            onChange={(e) => setRespuesta10(e.target.value)}
                            autoComplete="tel"
                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      {/* PREGUNTA 10 */}
                      {/* PREGUNTA 11 */}
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label className="block text-sm font-medium text-gray-900">
                            ¿Cómo se debe realizar una correcta caracterización
                            del riesgo?
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={respuesta11}
                            onChange={(e) => setRespuesta11(e.target.value)}
                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      {/* PREGUNTA 11 */}
                      {/* PREGUNTA 12 */}
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-900"
                          >
                            Seleccione la opción correcta: Indique cuáles son
                            las cuatro etapas consecutivas de la metodología
                            BOWTIE
                          </label>
                        </div>
                        <div className="mt-1">
                          <div className="">
                            <div className="">
                              <ul className="mt-3 ">
                                <li className="flex hover:bg-gray-50 cursor-pointer">
                                  <input
                                    name="pregunta12"
                                    value="
                                    Identificación de evento – impacto – consecuencia"
                                    type="radio"
                                    className=" appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    onChange={(e) =>
                                      setRespuesta12(e.target.value)
                                    }
                                  />
                                  <span className=" block text-sm  text-gray-500">
                                    Identificación de evento – impacto –
                                    consecuencia
                                  </span>
                                </li>
                                <li className="flex hover:bg-gray-50 cursor-pointer">
                                  <input
                                    name="pregunta12"
                                    value="Evento-daño ambiental-aplicación de salvaguardas"
                                    type="radio"
                                    className=" appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    onChange={(e) =>
                                      setRespuesta12(e.target.value)
                                    }
                                  />
                                  <span className=" block text-sm  text-gray-500">
                                    Aplicación de salvaguardas – consecuencia –
                                    impacto
                                  </span>
                                </li>
                                <li className="flex hover:bg-gray-50 cursor-pointer">
                                  <input
                                    name="pregunta12"
                                    value="
                                    Suceso-evento-consecuencia-impacto"
                                    type="radio"
                                    className=" appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    onChange={(e) =>
                                      setRespuesta12(e.target.value)
                                    }
                                  />
                                  <span className=" block text-sm  text-gray-500">Suceso-evento-consecuencia-impacto
                                  </span>
                                </li>
                                <li className="flex hover:bg-gray-50 cursor-pointer">
                                  <input
                                    name="pregunta12"
                                    value="Evento-daño ambiental-aplicación de salvaguardas"
                                    type="radio"
                                    className=" appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    onChange={(e) =>
                                      setRespuesta12(e.target.value)
                                    }
                                  />
                                  <span className=" block text-sm  text-gray-500">
                                    Evento-daño ambiental-aplicación de
                                    salvaguardas
                                  </span>
                                </li>
                                <li className="flex hover:bg-gray-50 cursor-pointer">
                                  <input
                                    name="pregunta12"
                                    value="Todas las anteriores"
                                    type="radio"
                                    className=" appearance-none h-4 w-4 border border-gray-300 rounded-xl bg-gray-300 checked:bg-amber-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    onChange={(e) =>
                                      setRespuesta12(e.target.value)
                                    }
                                  />
                                  <span className=" block text-sm  text-gray-500">
                                    Todas las anteriores
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* PREGUNTA 12 */}
                      {/* PREGUNTA 13 */}
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label
                            className="block text-sm font-medium text-gray-900"
                          >
                            ¿Es necesario llevar todos los eventos identificados
                            a la condición ALARP? ¿Por qué?
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={respuesta13}
                            onChange={(e) => setRespuesta13(e.target.value)}
                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      {/* PREGUNTA 13 */}
                      {/* PREGUNTA 14 */}
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label
                            className="block text-sm font-medium text-gray-900"
                          >
                            Metodología con la que se evalúan posibles
                            desviaciones de las condiciones normales de
                            operación de un Proyecto
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={respuesta14}
                            onChange={(e) => setRespuesta14(e.target.value)}
                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      {/* PREGUNTA 14 */}
                      {/* PREGUNTA 15 */}
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label
                            className="block text-sm font-medium text-gray-900"
                          >
                            ¿Cuál es la metodología considerada como “Base del
                            Análisis de Riesgos de Proceso”?
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={respuesta15}
                            onChange={(e) => setRespuesta15(e.target.value)}
                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      {/* PREGUNTA 15 */}
                      {/* PREGUNTA 16 */}
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label
                            className="block text-sm font-medium text-gray-900"
                          >
                            ¿De qué trata la práctica recomendada API RP 145?
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={respuesta16}
                            onChange={(e) => setRespuesta16(e.target.value)}
                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      {/* PREGUNTA 16 */}
                      {/* PREGUNTA 17 */}
                      <div className="sm:col-span-2">
                        <div className="flex justify-between">
                          <label
                            className="block text-sm font-medium text-gray-900"
                          >
                            Indique las principales diferencias entre un
                            Análisis de Riesgos y un Estudio de Riesgos
                          </label>
                        </div>
                        <div className="mt-1">
                          <input
                            type="text"
                            value={respuesta17}
                            onChange={(e) => setRespuesta17(e.target.value)}
                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-amber-500 focus:border-amber-500 border-warm-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      {/* PREGUNTA 17 */}

                      <div className="sm:col-span-2 sm:flex sm:justify-end">
                        <button
                          type="submit"
                          className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:w-auto"
                          >
                            Enviar Evaluación
                        </button>
                      </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-warm-gray-900" aria-labelledby="footer-heading">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="mt-12 border-t border-warm-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2022 IKTAN Training, Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
