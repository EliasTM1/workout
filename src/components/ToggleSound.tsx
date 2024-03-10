import { Dispatch } from "react"

type ToggleSoundProps ={ 
  allowSound: boolean
  setAllowSound: Dispatch<any>
}

export function ToggleSound({allowSound, setAllowSound}:ToggleSoundProps) {
  return (
    <button
    className="btn-sound"
    onClick={() => setAllowSound((allow: boolean) => !allow)}
  >
    {allowSound ? "🔈" : "🔇"}
  </button>
  )
}
