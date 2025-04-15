export const CounterAttackTip = () => {
  return (
    <div>
      <h3 className='text-lg font-bold mb-2'>Counterattack or not?</h3>
      <p>
        Game uses turn-based fight system, first you hit then I hit (or viceversa) once everyone had
        taken its turn, it repeat the cycle/laps
      </p>
      <p>
        if one side (you or citadel) have more stacks, every stack who didnt hit yet, will hit at
        the end of the cycle/lap
      </p>
      <p>
        knowing this, instead of counterattack, (he will NOT attack again until the cycle/lap ends)
        you can attack another stack
      </p>
      <p>
        and/or bring more stacks to not give citadel the oportunity to hit you back, so you kill
        them all on a single cycle/lap
      </p>
      <p>so you can decide if counterattack or not is more beneficial to you</p>
    </div>
  )
}
