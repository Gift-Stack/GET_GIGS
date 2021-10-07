import { useState } from 'react'
import {
  Paper,
  Grid,
  Box,
  OutlinedInput,
  Select,
  MenuItem,
  FormControl,
  Button
} from '@material-ui/core'
import { AddGigWrapper } from '../styles'

interface PropsTypes {
  activeComponent: string
  setActiveComponent(arg: string): void
}

const AddGigComponent = ({
  activeComponent,
  setActiveComponent
}: PropsTypes) => {
  const [value, setValue] = useState('Select')
  return (
    <AddGigWrapper>
      <h3 style={{ color: '#565D74', opacity: 0.8 }}>New Gig</h3>

      <>
        <Grid container spacing={3}>
          <Grid item xs={12} sm>
            <Paper style={{ margin: '1px auto', padding: 40 }}>
              <li>Basic Data</li>
              <li>Remuneration</li>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper style={{ margin: '1px auto', padding: '40px 60px' }}>
              <Box component="form" margin={1} width="100%" marginBottom={5}>
                <Box display="flex" justifyContent="space-between">
                  <Box display="inline-flex" flexDirection="column">
                    <label>Role</label>
                    <OutlinedInput
                      className="custom-input"
                      placeholder="Product Designer"
                    />
                  </Box>
                  <Box display="inline-flex" flexDirection="column">
                    <label>Company</label>
                    <OutlinedInput
                      className="custom-input"
                      placeholder="TM30"
                    />
                  </Box>
                </Box>
              </Box>
              <Box component="form" margin={1} width="100%" marginBottom={3}>
                <Box display="flex" justifyContent="space-between">
                  <Box display="inline-flex" flexDirection="column">
                    <label>Location</label>
                    <FormControl className="custom-input">
                      <Select
                        id="outlined-select-currency"
                        variant="outlined"
                        value={value}
                        onChange={(e: any) => setValue(e.target.value)}
                      >
                        <MenuItem value="Select" selected disabled>
                          Select
                        </MenuItem>
                        <MenuItem value="Product Design">
                          Product Design
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box display="inline-flex" flexDirection="column">
                    <label style={{ visibility: 'hidden' }}>''</label>
                    <FormControl className="custom-input">
                      <Select
                        id="outlined-select-currency"
                        variant="outlined"
                        value={value}
                        onChange={(e: any) => setValue(e.target.value)}
                      >
                        <MenuItem value="Select" selected disabled>
                          State/Region
                        </MenuItem>
                        <MenuItem value="Product Design">
                          Product Design
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Box>
              <Box component="form" margin={1} width="100%" marginBottom={2}>
                <Box display="flex">
                  <OutlinedInput
                    className="custom-input"
                    placeholder="Address"
                    fullWidth
                  />
                </Box>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <button
                  style={{ border: 'none', background: 'none', margin: 10 }}
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
      </>
    </AddGigWrapper>
  )
}

export default AddGigComponent
