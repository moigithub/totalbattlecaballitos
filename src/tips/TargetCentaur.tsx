export const TargetCentaurTip = () => {
  return (
    <div>
      <h3 className='text-lg font-bold mb-2'>Target centaur before it hit you</h3>
      <ol>
        <li>1. Pick an unit with vsMounted bonus</li>
        <li>2. set your unit str bonus</li>
        <li>3. set a strength limit, using centaur health</li>
      </ol>
      <p>
        <img className='max-w-[800px]' src='/targetCentaur.jpg' alt='str Limit' />
      </p>
    </div>
  )
}
