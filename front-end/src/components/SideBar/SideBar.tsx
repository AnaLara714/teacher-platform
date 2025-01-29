export const SideBar = () => {
  return (
    <div className="bg-[#D64B14] w-20% font-poppins flex flex-col justify-between">
      <div className="w-full flex flex-col items-start justify-center">
        <div className="flex flex-col items-center justify-center pl-10 pt-10 mt-16">
          <h3 className="font-extrabold text-4xl text-white">CODETECH</h3>
          <span className="font-light text-xs text-white text-center">
            desenvolvimento de sistemas
          </span>
        </div>
        <div className="mt-10 bg-[#EC622C] w-full pl-10 pt-4 pb-4">
          <span className="text-white text-lg font-semibold">Alunos</span>
        </div>
      </div>
      <div className="pl-10 font-light text-white text-xs mb-10 pr-8">
        <span>
          desenvolvido por{" "}
          <a
            className="font-semibold"
            href="https://github.com/AnaLara714"
            target="_blank"
          >
            Ana Lara
          </a>
          , CodeTech
        </span>
      </div>
    </div>
  );
};
