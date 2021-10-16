import React, { ChangeEvent, useState } from 'react'
import {
  Paper,
  Grid,
  Box,
  OutlinedInput,
  InputBase,
  Select,
  MenuItem,
  FormControl,
  Button,
  useMediaQuery
} from '@material-ui/core'
import {
  ThemeProvider,
  createTheme,
  makeStyles
} from '@material-ui/core/styles'
import Creatable from 'react-select/creatable'
import { ActionMeta, OnChangeValue } from 'react-select'
import { StylesConfig } from 'react-select'
import chroma from 'chroma-js'
import { ColourOption, colourOptions } from './docs/data'
import { AddGigWrapper } from '../styles'

interface PropsTypes {
  activeComponent: string
  setActiveComponent(arg: string): void
}

interface Option {
  readonly label: string
  readonly value: string
}

const createOption = (label: string) => ({
  label,
  value: label
})

// Styles
// const theme = createTheme({
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           fontSize: '1rem'
//         }
//       }
//     }
//   }
// })

const useStyles = makeStyles({
  inputStyles: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: '20px',
        borderColor: '#000fff'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'orange',
        borderWidth: '2px'
      }
    }
  }
})

const colourStyles: StylesConfig<Option, true> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    margin: '20px initial'
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    const color = chroma('#FF8B00')
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? '#FF8B00'
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : '#FF8B00',
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? '#FF8B00'
            : color.alpha(0.3).css()
          : undefined
      }
    }
  },
  multiValue: (styles) => {
    const color = chroma('#FF8B00')
    return {
      ...styles,
      backgroundColor: color.alpha(0.2).css(),
      padding: '5px 10px',
      borderRadius: 6
    }
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: '#FF8B00'
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: '#FF8B00',
    ':hover': {
      backgroundColor: '#FF8B00',
      color: 'white'
    }
  })
}

const AddGigComponent = ({
  activeComponent,
  setActiveComponent
}: PropsTypes) => {
  const classes = useStyles()
  const smallerThan768px = useMediaQuery('(max-width:768px)')
  const [value, setValue] = useState<unknown | string>('Select')
  const [sector, setSector] = useState('basic_data')
  const [inputValue, setInputValue] = useState('')
  const [tagValue, setTagValue] = useState<OnChangeValue<Option, true>>([])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // const { inputValue, value } = this.state
    if (!inputValue) return
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        console.group('Value Added')
        console.log(value)
        console.groupEnd()
        setInputValue('')
        setTagValue([...tagValue, createOption(inputValue)])
        event.preventDefault()
    }
  }

  return (
    <AddGigWrapper>
      <h3 style={{ color: '#565D74', opacity: 0.8 }}>New Gig</h3>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          <Paper
            style={{
              margin: '1px auto',
              padding: 40,
              borderRadius: 20,
              boxShadow: '0px 30px 50px #0000000D'
            }}
          >
            <li>Basic Data</li>
            <li>Remuneration</li>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            style={{
              margin: '1px auto',
              padding: smallerThan768px ? '40px 20px' : '40px 60px',
              borderRadius: 20
            }}
          >
            <Box component="form" margin={1} marginBottom={5}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <label>Role</label>
                  <OutlinedInput
                    className="custom-input"
                    placeholder="Product Designer"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <label>Company</label>
                  <OutlinedInput className="custom-input" placeholder="TM30" />
                </Grid>
              </Grid>
            </Box>
            <Box component="form" margin={1} marginBottom={2}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <label>Location</label>
                  <FormControl className="custom-input">
                    <Select
                      id="outlined-select-currency"
                      className="custom-input"
                      variant="outlined"
                      value={value}
                      onChange={(e: ChangeEvent<{ value: unknown | string }>) =>
                        setValue(e.target.value)
                      }
                    >
                      <MenuItem value="Select" selected disabled>
                        Select
                      </MenuItem>
                      <MenuItem value="Product Design">Product Design</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <label style={{ visibility: 'hidden' }}>State / Region</label>
                  <FormControl className="custom-input">
                    <Select
                      id="outlined-select-currency"
                      className="custom-input"
                      variant="outlined"
                      value={value}
                      onChange={(e: ChangeEvent<{ value: unknown | string }>) =>
                        setValue(e.target.value)
                      }
                    >
                      <MenuItem value="Select" selected disabled>
                        State/Region
                      </MenuItem>
                      <MenuItem value="Product Design">Product Design</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            <Box component="form" margin={1} marginBottom={6}>
              <Box display="flex">
                <OutlinedInput
                  className="custom-input"
                  placeholder="Address"
                  fullWidth
                />
              </Box>
            </Box>
            <Box component="form" margin={1} marginBottom={2}>
              <Grid container item xs={12}>
                <label>Add tags</label>
                <FormControl className="custom-input">
                  <Creatable
                    components={{ DropdownIndicator: null }}
                    menuIsOpen={false}
                    isClearable
                    isMulti
                    inputValue={inputValue}
                    value={tagValue}
                    onChange={(
                      value: OnChangeValue<Option, true>,
                      actionMeta: ActionMeta<Option>
                    ) => setTagValue(value)}
                    onInputChange={(value: string) => setInputValue(value)}
                    onKeyDown={handleKeyDown}
                    theme={(theme) => ({
                      ...theme,
                      // borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary25: '#E18700',
                        primary: chroma('#E18700').alpha(0.6).css()
                      }
                    })}
                    styles={colourStyles}
                    placeholder="Add more tags"
                  />
                </FormControl>
              </Grid>
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <button
                onClick={() => setActiveComponent('gigs')}
                style={{
                  border: 'none',
                  background: 'none',
                  margin: 10,
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#2F417E',
                  color: '#fff',
                  textTransform: 'none',
                  borderRadius: 10
                }}
                onClick={() => setActiveComponent('gigs')}
              >
                Continue
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </AddGigWrapper>
  )
}

export default AddGigComponent
