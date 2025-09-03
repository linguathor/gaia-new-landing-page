import Parallax from './Parallax';

export default function BlobBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <Parallax yFrom={-20} yTo={20}>
        <div className="absolute -top-16 -left-8 h-56 w-56 rounded-full bg-[#88B6CD]/40 blur-3xl animate-[blob_10s_infinite]"></div>
      </Parallax>
      <Parallax yFrom={-30} yTo={30}>
        <div className="absolute top-24 -right-10 h-72 w-72 rounded-full bg-[#229DD1]/30 blur-3xl animate-[blob_12s_infinite]"></div>
      </Parallax>
      <Parallax yFrom={-15} yTo={15}>
        <div className="absolute bottom-16 left-1/4 h-48 w-48 rounded-full bg-[#1183B7]/25 blur-3xl animate-[blob_8s_infinite]"></div>
      </Parallax>
    </div>
  );
}
