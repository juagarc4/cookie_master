import { ChangeEvent, useState } from 'react'
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import Cookies from 'js-cookie'
import { Layout } from 'components/layouts'

const ThemChangerPage = () => {
  const [currentTheme, setCurrentTheme] = useState('light')

  const onThemeChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value

    console.log({ selectedTheme })
    setCurrentTheme(selectedTheme)
    Cookies.set('theme', selectedTheme)
  }
  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Theme</FormLabel>
            <RadioGroup value={currentTheme} onChange={onThemeChanged}>
              <FormControlLabel value='light' control={<Radio />} label='Light' />
              <FormControlLabel value='dark' control={<Radio />} label='Dark' />
              <FormControlLabel value='custom' control={<Radio />} label='Custom' />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  )
}

export default ThemChangerPage
