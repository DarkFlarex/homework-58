import React from 'react';

interface Props extends React.PropsWithChildren{
    type: 'primary' | 'success'|'danger'|'warning';
    ShowAlert: boolean;
    onDismiss?: React.MouseEventHandler;
}

const Alert:React.FC<Props> = ({
    type,
    ShowAlert,
    onDismiss,
    children,
}) => {
    return (
        <>
            <div className={`alert alert-${type} w-50 justify-content-sm-between align-items-center`}
                 role="alert"
                 style={{display: ShowAlert ? 'flex' : 'none'}}
            >
                {children}
                {onDismiss ? (
                    <button type="button" className="btn-close" aria-label="Close" onClick={onDismiss}></button>
                ) : undefined}
            </div>
        </>
    );
};

export default Alert;