import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children }) => {
    const elRef = useRef(null)
    if (!elRef.current) {
        const div = document.createElement('div')
        elRef.current = div
    }

    useEffect(() => {
        const modalRoot = document.getElementById('modal')
        modalRoot.appendChild(elRef.current)

        return () => modalRoot.removeChild(elRef.current)
    }, [])

    return createPortal(
        <div className="bg-neutral-900 bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-slate-50 p-6 rounded-md min-w-80">
                {children}
            </div>
        </div>,
        elRef.current
    )
}

export default Modal
