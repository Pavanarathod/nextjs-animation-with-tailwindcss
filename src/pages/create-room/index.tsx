import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

type Props = {};

const CreateRoom = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState<number>(1);
  const [createRoomTtitle, setCreateRoomTitle] = useState<string>("");
  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onStepChange = () => {
    router.push({
      pathname: "/create-room",
      query: {
        step: step === 1 ? 1 : step + 1,
      },
    });
  };

  useEffect(() => {
    if (router.query) {
      if (router.query.step === "1") {
        setCreateRoomTitle("Basi Details");
      }
      if (router.query.step === "2") {
        setCreateRoomTitle("Asset Classes");
      }
      if (router.query.step === "3") {
        setCreateRoomTitle("Upload images");
      }
    } else {
      setCreateRoomTitle("Create room");
    }
  }, [router.query]);

  console.log(step);
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
                    {router.query.step ? `${createRoomTtitle}` : "Create Room"}
                  </Dialog.Title>
                  <div className="mt-2 flex flex-col justify-between h-[400px]">
                    <div className=" flex-1 flex items-center h-full justify-center">
                      <h1>form content</h1>
                    </div>

                    {/* footer. */}
                    <div className="w-full flex items-center justify-between">
                      {router.query && (
                        <h1 onClick={onStepChange} className="cursor-pointer">
                          See more options
                        </h1>
                      )}

                      {router.query.step && (
                        <div className="space-x-5">
                          <button className="px-5 py-2 border-indigo-500 border rounded-md">
                            Previous
                          </button>
                          <button
                            onClick={onStepChange}
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
