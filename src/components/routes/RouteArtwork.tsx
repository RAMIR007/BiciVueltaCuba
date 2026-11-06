interface RouteArtworkProps {
    className?: string;
}

export const RouteArtwork = ({ className = "" }: RouteArtworkProps) => (
    <div className={`relative isolate overflow-hidden bg-[#dce9df] ${className}`}>
        <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
        >
            <rect width="800" height="500" fill="#dce9df" />
            <circle cx="620" cy="112" r="63" fill="#eab27b" />
            <path d="M0 276C129 217 217 251 341 213C487 168 614 211 800 135V500H0V276Z" fill="#b9d1b4" />
            <path d="M0 346C155 279 274 331 397 277C545 212 666 275 800 207V500H0V346Z" fill="#709b7c" />
            <path d="M0 409C143 346 257 386 391 332C541 272 664 345 800 275V500H0V409Z" fill="#3e765e" />
            <path d="M-58 414C103 317 175 470 332 390C456 327 489 260 590 294C663 318 706 411 857 339" stroke="#f7f1df" strokeWidth="39" strokeLinecap="round" />
            <path d="M-58 414C103 317 175 470 332 390C456 327 489 260 590 294C663 318 706 411 857 339" stroke="#df7657" strokeWidth="5" strokeDasharray="2 16" strokeLinecap="round" />
            <path d="M75 132C160 99 235 108 309 139M40 172C133 132 224 145 284 169M517 189C584 160 665 164 727 188" stroke="#fff" strokeOpacity=".38" strokeWidth="2" />
            <circle cx="334" cy="389" r="13" fill="#fff" />
            <circle cx="334" cy="389" r="6" fill="#176b53" />
            <circle cx="590" cy="294" r="13" fill="#fff" />
            <circle cx="590" cy="294" r="6" fill="#176b53" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#173d30]/55 via-transparent to-transparent" />
    </div>
);
