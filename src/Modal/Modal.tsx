import React from "react";

interface PropsButtons{
    id: string;
    type: string;
    label: string;
    onClick: React.MouseEventHandler;
}

interface Props extends React.PropsWithChildren{
    show: boolean;
    title: string;
    onClose: React.MouseEventHandler;
}

const Modal: React.FC<Props> = ({
    show,
    title ,
    children ,
    onClose,
}) => {
    const Buttons:PropsButtons[] = [
        {id: '1',type: 'primary', label: 'Continue', onClick: () => console.log('clicked continue')},
        { id: '2', type: 'danger', label: 'Close', onClick: onClose}
    ];
    return (
        <>
            <div
                className="modal-backdrop show"
                onClick={onClose}
                style={{display: show ? 'block' : 'none', opacity: 1,backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
            >
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
                            <div className="modal-footer">
                                {Buttons.map((Button) => (
                                    <button
                                        key={Button.id}
                                        className={`btn btn-${Button.type}`}
                                        onClick={Button.onClick}
                                    >
                                        {Button.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;