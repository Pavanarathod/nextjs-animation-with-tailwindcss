import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect, useState } from "react";

type Props = {};

const CreateRoom = (props: Props) => {
  const router = useRouter();
  const [step, setStep] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(true);
  const [createRoomTtitle, setCreateRoomTitle] = useState<string>("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    if (step > 0) {
      if (step === 1) {
        setCreateRoomTitle("Basic Details");
      }
      if (step === 2) {
        setCreateRoomTitle("Asset Class");
      }
      if (step === 3) {
        setCreateRoomTitle("Upload Rood Details");
      }
    }
  }, [step]);

  console.log("step: ", step);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl min-h-[500px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {step > 0 ? `${createRoomTtitle}` : "Create Room"}
                  </Dialog.Title>
                  <div className="mt-2 flex flex-col justify-between h-[400px]">
                    <div className=" flex-1 flex items-center h-full justify-center">
                      {step === 0 && <h1>Create Room</h1>}
                      {step === 1 && <h1>Basic Room details</h1>}
                      {step === 2 && <h1>Asset class details details</h1>}
                      {step === 3 && <h1>Upload file to room</h1>}
                    </div>

                    {/* footer. */}
                    <div className="w-full flex items-center justify-between">
                      {step === 0 ? (
                        <button onClick={() => setStep(1)}>
                          See more options
                        </button>
                      ) : (
                        <button onClick={() => setStep(0)}>Back</button>
                      )}

                      {step > 0 && (
                        <div className="flex items-center space-x-5">
                          <p>Step {step} of 3</p>
                          <button
                            onClick={() => setStep(step - 1)}
                            disabled={step === 0}
                            className="px-5 py-2 border-indigo-500 border rounded-md"
                          >
                            Previous
                          </button>
                          <button
                            onClick={() => setStep(step + 1)}
                            disabled={step >= 3}
                            className="px-5 py-2 border-indigo-500 border rounded-md"
                          >
                            Next
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CreateRoom;
