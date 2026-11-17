interface RouteArtworkProps {
    className?: string;
}

export const RouteArtwork = ({ className = "" }: RouteArtworkProps) => (
    <div className={`relative isolate overflow-hidden bg-[#f3d7a8] ${className}`}>
        <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
        >
            <rect width="800" height="500" fill="#f4d8ad" />
            <circle cx="610" cy="105" r="58" fill="#eea65d" />
            <path d="M0 205C126 184 236 214 355 196C497 175 647 190 800 158V500H0V205Z" fill="#9bd8cf" />
            <path d="M0 268C135 228 242 260 356 238C505 209 640 229 800 194V500H0V268Z" fill="#67b9b0" />
            <path d="M0 323C123 280 240 310 365 279C507 245 650 273 800 231V500H0V323Z" fill="#3c9180" />
            <path d="M0 390C137 337 255 373 391 332C540 288 669 322 800 282V500H0V390Z" fill="#216b59" />
            <path d="M-35 421C91 360 181 457 300 411C408 369 473 308 578 329C668 347 713 418 835 363" stroke="#f9edcf" strokeWidth="35" strokeLinecap="round" />
            <path d="M-35 421C91 360 181 457 300 411C408 369 473 308 578 329C668 347 713 418 835 363" stroke="#e77b55" strokeWidth="5" strokeDasharray="2 15" strokeLinecap="round" />
            <path d="M38 235C112 220 172 232 235 248M420 220C493 207 563 213 628 229M654 254C710 244 758 249 806 263" stroke="#fff" strokeOpacity=".55" strokeWidth="3" strokeLinecap="round" />
            <g fill="#174f43">
                <path d="M119 359c-5-48-6-92-2-139l12-1c-3 47-2 93 5 137l-15 3Z" />
                <path d="M126 222c-36-28-60-28-80-17 31 1 47 13 66 29-37-9-58-4-76 12 34-4 55 3 79 17-28 2-46 13-55 29 29-11 52-10 76-3 15-28 32-43 59-53-24-7-46-3-72 10 17-23 41-34 69-40-26-13-55-6-84 16 9-29 28-47 53-63-33 3-55 21-72 53-4-29 4-54 20-78-29 14-43 39-43 78-15-25-17-48-10-74-21 23-22 51-9 84-22-18-33-38-34-61-13 29-3 57 24 83Z" />
                <path d="M691 367c-4-39-4-75 0-112l11-1c-3 39-2 75 4 110l-15 3Z" />
                <path d="M698 258c-30-24-50-24-67-15 26 1 40 11 56 24-31-8-48-3-63 10 28-3 45 3 64 14-23 2-37 11-45 24 24-9 42-8 62-2 12-23 26-35 48-43-20-6-38-3-59 8 14-19 33-28 56-33-22-11-45-5-69 13 8-24 23-39 43-52-27 2-45 17-59 44-3-24 3-44 16-64-24 12-35 32-35 64-12-20-14-39-8-60-17 19-18 42-7 69-18-15-27-31-28-50-11 24-2 47 20 68Z" />
            </g>
            <path d="M0 466C111 438 197 453 287 441M520 452C617 434 702 447 800 424" stroke="#f5d99f" strokeOpacity=".55" strokeWidth="3" strokeLinecap="round" />
            <circle cx="300" cy="411" r="12" fill="#fff" />
            <circle cx="300" cy="411" r="5.5" fill="#176b53" />
            <circle cx="578" cy="329" r="12" fill="#fff" />
            <circle cx="578" cy="329" r="5.5" fill="#176b53" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#123f35]/30 via-transparent to-transparent" />
    </div>
);
