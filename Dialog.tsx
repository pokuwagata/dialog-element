import React, { useCallback, useEffect } from "react";
import dialogPolyfill from "dialog-polyfill";

import { useModal } from "./useModal";

export default function Dialog() {
  const { ref, showModal, closeModal } = useModal();

  useEffect(() => {
    if (ref.current && !ref.current.showModal) {
      dialogPolyfill.registerDialog(ref.current);
    }
  }, [ref]);

  const stopPropagation = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
    },
    []
  );

  return (
    <>
      <button type="button" onClick={showModal}>
        open
      </button>
      <dialog onClick={closeModal} ref={ref}>
        <section onClick={stopPropagation} className="dialog-body">
          <header>Header</header>
          <p>text</p>
          <footer>
            <button type="button" onClick={closeModal}>
              close
            </button>
          </footer>
        </section>
      </dialog>
    </>
  );
}
