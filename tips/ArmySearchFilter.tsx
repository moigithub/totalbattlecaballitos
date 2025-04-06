export const ArmySearchFilterTip = () => {
  return (
    <div>
      <h3 className='text-lg font-bold mb-2'>Army search and filtering</h3>

      <p>
        To make easier army units selection, you can use the search and filtering features, at right
        side
      </p>
      <p>
        entering the unit name you looking for, it can do partial match: ie: instead of "spearman"
        you can type "spe"
      </p>
      <p>
        or if you want to avoid certain units types (ie: Melee, Ranged), you can disable the
        checkbox, and they will hide
      </p>
      <p>
        it also have monster types filter, where it uses in a combination with the types filter, ie:
        "melee elemental", "mounted beast", "flying,melee,ranged dragons"
      </p>
      <p>or unchecking boxes you could view everything except "dragons" and "melee"</p>
    </div>
  )
}
