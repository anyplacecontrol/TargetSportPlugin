const CHANGE_FIELD = '/CHANGE_FIELD'

//*******************************************************************************
//REDUCER

export function BaseReducer(_ACTION_TYPE_PREFIX, state, action = {}) {
  switch (action.type) {
    case _ACTION_TYPE_PREFIX + CHANGE_FIELD: {
      let {fieldName, value} = action

      if (Array.isArray(fieldName)) {
        let stateSlice = {...state}
        let pointerObj = stateSlice
        for (let i = 0; i < fieldName.length; i++) {
          let fldName = fieldName[i]
          if (i === fieldName.length - 1) pointerObj[fldName] = value //it is last field: set value to it
          else {
            const nextFieldName = fieldName[i + 1]
            if (nextFieldName == null || typeof nextFieldName === 'string') {
              if (!pointerObj[fldName]) {
                pointerObj[fldName] = {} //field does not exist - create empty object for field
              } else pointerObj[fldName] = {...pointerObj[fldName]} //copy field object
            }
            //if fldName is number - it means array index
            else {
              if (pointerObj[fldName]) pointerObj[fldName] = [...pointerObj[fldName]] //copy field object
              else pointerObj[fldName] = []
              //if array index does not exist - create empty objects for it
              if (!pointerObj[fldName][nextFieldName]) {
                for (let j = pointerObj[fldName].length; j <= nextFieldName; j++) pointerObj[fldName].push({})
              }
            }

            pointerObj = pointerObj[fldName]
          }
        }
        fieldName = fieldName[0]
        value = stateSlice[fieldName]
      }

      return {...state, [fieldName]: value}
    }

    default:
      return null
  }
}

//*******************************************************************************
//ACTION CREATORS

export function changeField(fieldName, value, _ACTION_TYPE_PREFIX) {
  if (!_ACTION_TYPE_PREFIX) throw new Error('changeField: _ACTION_TYPE_PREFIX is not defined')
  if (fieldName == null) throw new Error('changeField: fieldName is not defined')
  if (typeof value === undefined) throw new Error('changeField: value is not defined')

  return {
    type: _ACTION_TYPE_PREFIX + CHANGE_FIELD,
    fieldName,
    value
  }
}
