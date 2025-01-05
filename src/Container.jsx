
export const DiaryEntryCard = props => (
    <div
        className={
            "p-4 rounded-md w-full  max-w-lg  text-white bg-card-color h-2/3  overflow-scroll"
        }
    >
        <h1 className="text-xl font-semibold ml-3 mt-2">{props.title}</h1>
        <h2 className="text-sm text-slate-400 ml-3 mt-1" >{props.entryDate}</h2>
        <div className="p-3">
    <img src={props.imageUrl} className="rounded-lg" />
</div>
        <p className="ml-3">{props.entryContent}</p>
    </div>
);

export const Modal = props => (
    <div
        style={{
            background: "rgba(24, 26, 42, 0.8)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(7.2px)",
            WebkitBackdropFilter: "blur(7.2px)",
            zIndex: 1000,
        }}
        className={`${
            props.isHidden ? "hidden" : ""
        } fixed inset-0 flex justify-center items-center`}
        onClick={props.onCloseClicked} 
    >

        <div
            className="relative bg-card-color p-4 rounded-md w-full max-w-lg text-white h-auto overflow-auto"
            onClick={e => e.stopPropagation()} 
        >
            <button
                onClick={props.onCloseClicked}
                className="absolute top-2 right-2 bg-card-color  hover:bg-card-color text-slate-200 rounded-full w-12 h-12 flex items-center justify-center "
        >
                ✕
            </button>
            {props.children}
        </div>
    </div>
);