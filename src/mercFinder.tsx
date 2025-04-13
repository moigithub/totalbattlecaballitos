export const MercFinder = () => {
  return (
    <div className='p-5 pt-[56px]'>
      <h2 className='text-3xl font-bold my-4'>Mercenary finder</h2>
      <h3>Python script</h3>
      <p>1. Create a text file and copy the following code into it: </p>
      <p>make sure all the code indentation is correct</p>
      <p>if you not sure what a code indentation is, google it</p>
      <img className='p-5' src='./mercFinderPythonScript.jpg' alt='bonus' />
      <p>
        and save it as <span className='font-bold text-red-600'>exchange.py</span>
      </p>
      <br />

      <p>
        2. Download and install python 3.x from the official website:
        https://www.python.org/downloads/
      </p>
      <p>if you dont know how to install python, google it</p>
      <p>or check youtube videos, plenty of them</p>
      <p>make sure when you install, to check "add python to PATH"</p>

      <p>
        3. create another text file on the same folder, save it as{' '}
        <span className='font-bold text-red-600'>install.bat</span>
      </p>
      <p>and copy the following lines into it</p>
      <div className='ml-5'>
        <p className='font-bold text-red-600'>pip install</p>
        <p className='font-bold text-red-600'>pip install python-imagesearch</p>
      </div>
      <p>this will allow you to install the script dependencies</p>

      <br />
      <br />
      <p>
        4. create another text file on the same folder, save it as{' '}
        <span className='font-bold text-red-600'>merc.bat</span>
      </p>
      <p>and copy the following line into it</p>
      <p>
        <span className='font-bold text-red-600'>python exchange.py</span>
      </p>
      <p>this will allow you to run easily the script</p>

      <br />
      <p>5. go to your game, and capture a mercenary exchange image</p>
      <p>make sure you have zoom at 25%</p>
      <p>and it do NOT contain part of grass, sand or any other tile color, ONLY mercenary</p>
      <p>or you can download the following image, right click "save image as"</p>
      <img className='p-5 w-[150px] ' src='./mercenary.bmp' alt='mercenary icon' />

      <br />
      <br />
      <p>you should end up with 4 files on the same folder like this</p>
      <img src='./mercfiles.jpg' alt='mercenary script files' />
      <br />
      <p>6. run the install.bat file (this should be done only 1 time)</p>
      <p>7. run the merc.bat file (this should be done everytime you want to find mercs)</p>
      <br />
      <br />

      <h3>HOW to use it</h3>
      <p>
        make sure you are at 25% zoon, scroll, scroll, scroll, scroll, scroll, scroll, scroll,
        scroll, scroll, scroll, scroll, until it BEEPS, then you have your merc on the screen
      </p>

      <br />
      <br />
      <div className='bg-red-600 text-gray-200 rounded-lg p-4 my-4'>
        <p>or download from the following links, at your own risk</p>
        <p>NO clickable links are provided, you need to copy/paste</p>
        <p>python script: https://tinyurl.com/findermercex</p>
        <br />
        <p>alternative if you play on windows:</p>
        <p>executable program: https://tinyurl.com/imgFindTB</p>
      </div>

      <br />
      <div className='bg-green-600 text-gray-200 rounded-lg p-4 my-4'>
        <p>finally... if you dont understand anything, you can ask chatgpt/deepseek AI :)</p>
        <p>happy hunting!</p>
      </div>
      <br />
    </div>
  )
}
