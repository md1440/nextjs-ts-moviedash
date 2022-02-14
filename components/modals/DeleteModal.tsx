import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactElement, useState } from 'react';

interface Props {
  openModal: () => void;
  closeModal: () => void;
  onDelete: () => void;
}

function DeleteModal({openModal, closeModal, onDelete}: Props): ReactElement {

  return (
    <div className="min-h-screen px-4 text-center">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog.Overlay className="fixed inset-0" />
      </Transition.Child>

      {/* This element is to trick the browser into centering the modal contents. */}
      <span className="inline-block h-screen align-middle" aria-hidden="true">
        &#8203;
      </span>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="my-8 inline-block w-full max-w-lg transform overflow-hidden rounded-2xl bg-slate-50 bg-opacity-55 p-6 text-left align-middle shadow-xl transition-all">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Delete this Movie
          </Dialog.Title>
          <div className="mt-3">
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this movie? This movie
              will be permanently removed. This action cannot be undone.
            </p>
          </div>

          <div className="mt-5">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 mr-4"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </Transition.Child>
    </div>
  );
}

export default DeleteModal
