import { Button, Modal, ModalBody, ModalHeader } from 'flowbite-react'
import { useRef, useState } from 'react'

export const Disclaimer = () => {
  const [openModal, setOpenModal] = useState(true)
  const emailInputRef = useRef<HTMLInputElement>(null)

  return (
    <Modal
      show={openModal}
      size='3xl'
      position={'center'}
      popup
      onClose={() => setOpenModal(false)}
      initialFocus={emailInputRef}
    >
      <ModalHeader>DISCLAIMER</ModalHeader>
      <ModalBody>
        <div className='space-y-6 p-6'>
          <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
            ...an annoying popup, because of some "lovely player" (/sarcasm)
          </p>
          <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
            All of our software is covered by this disclaimer: We do not guarantee that our products
            are free from defects. Our software is provided “as is," and you use the software at
            your own risk. We make no warranties as to performance, merchantability, fitness for a
            particular purpose, or any other warranties whether expressed or implied. No oral or
            written communication from or information provided shall create a warranty. Under no
            circumstances shall we be liable for direct, indirect, special, incidental, or
            consequential damages resulting from the use, misuse, or inability to use this software,
            even if we has been advised of the possibility of such damages.
          </p>
          <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
            Its a useless calculator, If you use it, the evil bogeyman will come, threaten you, take
            your candies and cookies, and force you to eat your vegetables.
          </p>
          <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
            IF you have any ideas, suggerences or new features to add, please send a message to
            moogumuro@k166.aow
          </p>
          <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
            Also accepting any kind of donations, candies, cookies, vegetables, gold, silver, food,
            or any resources you can send to the same address above.
          </p>
        </div>
      </ModalBody>
      <footer className='bg-white dark:bg-gray-900'>
        <div className='mx-auto w-full max-w-screen-xl   py-2 lg:py-4'>
          <Button className='w-full my-2' onClick={() => setOpenModal(false)}>
            I ACCEPT, I won't tell anyone I'm going to use it.{' '}
          </Button>
          <Button
            className='w-full my-2'
            color='red'
            onClick={() => {
              setOpenModal(false)
              window.location.replace('https://www.google.com')
            }}
          >
            I'm sooo scared, I will close it immediatelly
          </Button>
          <Button
            className='w-full my-2 relative flex items-center justify-center rounded-lg text-center font-medium focus:outline-none focus:ring-4 h-10 px-5 text-sm text-white hover:bg-pink-800 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800  bg-pink-700'
            onClick={() => {
              setOpenModal(false)
              window.location.replace('https://www.google.com/search?q=cookies+and+candies')
            }}
          >
            I love my cookies and candies, and don't like vegetables
          </Button>
        </div>
      </footer>
    </Modal>
  )
}
