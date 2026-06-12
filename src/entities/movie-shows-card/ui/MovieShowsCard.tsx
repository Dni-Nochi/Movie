import ava from '@/shared/assets/img/Avengers.jpg';
export function MovieShowsCard() {
  return (
    <article className="flex justify-center w-75 h-105 p-7.5 bg-[#1a1a1a] rounded-xl">
      <a className="flex flex-col gap-3.5">
        <img src={ava} className="w-60 h-62 rounded-xl" />
        <div className="flex justify-between px-1">
          <p>название</p>
          <p>рейтинг</p>
        </div>
        <p className="px-1">дата выхода</p>
        <div className="flex justify-between px-1">
          <p>жанр</p>
          <p>стрелка</p>
        </div>
      </a>
    </article>
  );
}
