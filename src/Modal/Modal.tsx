import React from "react";

interface Props extends React.PropsWithChildren{
    show: boolean;
    title: string;
    onClose: React.MouseEventHandler;
}

const Modal: React.FC<Props> = ({
    show,
    title ,
    children ,
    onClose
}) => {
    return (
        <>
            <div className="modal-backdrop show" onClick={onClose} style={{display: show ? 'block' : 'none', opacity: 1,backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                <div className="modal show" style={{display: show ? 'block' : 'none'}}>
                    <div
                        className="modal-dialog"
                        onClick={(event)=>event.stopPropagation()}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5">
                                    {title}
                                </h1>
                                <button
                                    type="button" className="btn-close" aria-label="Close" onClick={onClose}
                                >
                                </button>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;