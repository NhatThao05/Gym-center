import { Grid, List, Typography, Box, ListItemText, Button, Stack } from "@mui/material";
import {ListItemTitle, ModalImage} from "../../styles/tranformation"
import TextField from '@mui/material/TextField';

export default function Transformation() {
 return (
  <>
  {/* Feedback before & after */}
   <Grid container spacing={2} justifyContent="center">
    <Grid item md={6} lg={4}>
      <Box sx={{
          mt: 12,
          pt: 10,
      }}>
         <List>
          <ListItemTitle>
           <Typography variant="h4" fontWeight={'bold'}>BEFORE & AFTER</Typography>
          </ListItemTitle>
          <ListItemText>
           <Typography variant="h6">
             Workout at CITIGYM for a chance to change your appearance dramatically.
           </Typography>
           <Typography variant="h6">
           Regular practice at CITIGYM and the right technique, along with 
           a reasonable diet will help improve your physique significantly. 
           Citigym's trainers design a workout program based on your
           body mass index and health status to help you see dramatic 
           changes in just an average of 6-8 weeks.
           </Typography>
          </ListItemText>
         </List>
      </Box>
    </Grid>
    <Grid item md={6} lg={4}>
       <Box sx={{
           mt: 2,
           pt: 10,
       }}>
        <ModalImage src="https://i8.amplience.net/i/jpl/jd_534741_e?qlt=92&w=750&h=957&v=1&fmt=auto"/>
       </Box>
    </Grid>
   </Grid>
   {/* Body mass index */}
   <Grid container spacing={2} justifyContent="center">
    <Grid item md={6} lg={4}>
       <Box sx={{
           mt: 4,
           pt: 10,
       }}>
        <ModalImage src="https://citigym.com.vn/themes/citigym/images/transparent-bg/bmi-text.png"/>
       </Box>
     </Grid>
     <Grid item md={6} lg={4}>
      <Box sx={{
          mt: 4,
          pt: 10,
      }}>
         <List>
          <ListItemTitle>
           <Typography variant="h4" fontWeight={'bold'}>CALCULATE BMI (BODY MASS INDEX)</Typography>
          </ListItemTitle>
          <ListItemText>
           <Typography variant="h6">
            Measure BMI at CITIGYM to assess your fat, lean or ideal weight.
           </Typography>
           <Typography variant="h6">
            CITIGYM supports members to measure BMI before 
            and during exercise so that members can track 
            exercise results. BMI is the Body Mass Index, used by 
            doctors and health professionals to determine whether 
            a person is obese, overweight, or underweight. Please 
            leave information so that CITIGYM can help you 
            analyze your health and give advice that is suitable for 
            your condition.
           </Typography>
          </ListItemText>
         </List>
      </Box>
      {/* field form */}
      <Grid container spacing={2} justifyContent="center" sx={{mt: 4}}>
       <Grid item md={6} lg={4} sx={{mr: 4}}>
           <Stack sx={{
             mb: 4,
           }}>  
             <TextField id="outlined-textarea" label="Height/ CM" multiline sx={{mb: 4}}/>
             <TextField id="outlined-textarea" label="Age" multiline sx={{mb: 4}}/>
             <TextField id="outlined-textarea" label="First and last name" multiline/>
           </Stack>
           <Button variant='contained' sx={{fontWeight: 'bold'}}>GET RESULT</Button>
       </Grid>
       <Grid item md={6} lg={4}>
           <Stack sx={{
             mb: 4,
           }}>  
             <TextField id="outlined-textarea" label="Weight" multiline sx={{mb: 4, width: 150}}/>
             <TextField id="outlined-textarea" label="Gender" multiline sx={{mb: 4}}/>
             <TextField id="outlined-textarea" label="Phone number" multiline/>
           </Stack>
       </Grid>
      </Grid>

    </Grid>
   </Grid>
  </>
 )
}