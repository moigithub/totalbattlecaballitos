export const UnitStatsTip = () => {
  return (
    <div>
      <h3 className='text-lg font-bold mb-2'>Unit stats</h3>
      <p>
        If you entered your hp/str bonus correctly, you can view your unit and stack health and
        strength, also the type of unit you selected, and versus what type of monsters it have extra
        damage bonus
      </p>
      <code>guardsman:melee vs Mounted,Beast</code>
      <code>Unit Hp 3_478.8 Str 3_296.8</code>
      <code>Stack HP 13_915.2 STR 13_187.2</code>
      <code>STR vsMounted(197%) 17_284.8vsBeast(405%) 21_611.2</code>
      <p>You can also use the buttons + and - to change the units amount, and view their stats</p>
    </div>
  )
}
