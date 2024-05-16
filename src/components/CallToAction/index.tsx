"use client";

const CallToAction = () => {

    return (
        <section className="relative z-10 overflow-hidden  py-20 lg:py-[115px]">
            <div className="container mx-auto">
                <div className="relative overflow-hidden">
                    <div className="-mx-4 flex flex-wrap items-stretch">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-[570px] text-center">
                                <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                                    <span>Realiza busqueda via QR</span>
                                    <span className="text-3xl font-normal md:text-[40px]">
                                        {" "}
                                        Empieza ahora{" "}
                                    </span>
                                </h2>
                            </div>
                            <div className="-mx-4 flex flex-wrap justify-center">
                                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                    <div className="mb-10 ">
                                        <button
                                            onClick={() => alert("Abrir camara")}
                                            className="inline-block w-full c rounded-md  text-center text-base font-medium text-white transition duration-300 hover:bg-black/20">
                                            <div
                                                className="relative z-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
                                                data-wow-delay=".1s">
                                                <span className="size-20 w-full h-auto block">Abrir cámara</span>
                                                <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
                                                    Recommended
                                                </p>

                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" /></svg>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                    <div
                                        className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
                                        data-wow-delay=".1s">
                                        <form onSubmit={(e) => e.preventDefault()}>
                                            <h3 className="mb-5 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                                                Buscar por codigo
                                            </h3>
                                            <div className="mb-[22px]">
                                                <label
                                                    htmlFor="fullName"
                                                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                                                >
                                                    Nuúmero de la autorización
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="Nuúmero de la autorización"
                                                    className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
                                                />
                                            </div>
                                            <div className="mb-[22px]">
                                                <label
                                                    htmlFor="fullName"
                                                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                                                >
                                                    Año de la autorización
                                                </label>
                                                <input
                                                    type="password"
                                                    placeholder="Año de la autorización"
                                                    className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
                                                />
                                            </div>
                                            <div className="mb-9">
                                                <button
                                                    type="submit"
                                                    className="flex w-full cursor-pointer items-center justify-center rounded-md border border-primary bg-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:bg-primary/90">
                                                    Buscar
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction;