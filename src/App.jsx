import { useState,useEffect } from 'react'
import './App.css'
import axios from "axios";
import {Flex,Grid,GridItem,Progress,HStack} from '@chakra-ui/react'

function App() {
  const[conent,setContent] = useState()
  const[staffStars,setStaffStars] = useState()

  useEffect(() =>{
    async function getData(){
      const body = {
        key: "amer874534778ont-76544"
      };
  
     await axios.post(`https://amer-backend.herokuapp.com`, body ).then((res) => {
        const persons = res.data;
        setContent(persons)
        console.log(persons)

       let staffStarOne = 0;
       let staffStarTwo = 0;
       let staffStarThree = 0;
       let staffStarFour = 0;
       let staffStarFive = 0;
       persons.map((item)=>{
         if(item.staff == 1){
          staffStarOne += 1;
         } else if(item.staff == 2){
          staffStarTwo +=1;
         } else if(item.staff == 3){
          staffStarThree +=1;
         } else if(item.staff == 4){
          staffStarFour +=1;
         } else if(item.staff == 5){
          staffStarFive +=1;
         }
       })

       const staffStar = {
         one:staffStarOne,
         two:staffStarTwo,
         three:staffStarThree,
         four:staffStarFour,
         five:staffStarFive,
         total:staffStarOne+staffStarTwo+staffStarThree+staffStarFour+staffStarFive
       }
       console.log(staffStar)
       setStaffStars(staffStar);
      });
    }
    getData()
    
},[])

console.log(conent)

  return (
    <Flex w={'100%'} direction='column' padding={'50px'}>
      <Flex direction={'column'} mb='50px' width={'30%'} p='20px' backgroundColor={'gray.300'} borderRadius='10px'>
        <Flex fontSize={'18px'} fontWeight='500'>Counter staff rating analysis</Flex>
        <HStack w='100%'><Flex w={'20%'} fontSize='13px'>One star</Flex><Progress value={staffStars?.one} max={staffStars?.total}  colorScheme={'purple'} backgroundColor='white' borderRadius={'10px'} m='10px 0px' border={'1px solid'} borderColor='gray.100' w={'100%'}/><Flex fontSize='14xp'>{staffStars?.one}/{staffStars?.total}</Flex></HStack>
        <HStack w='100%'><Flex w={'20%'} fontSize='13px'>Two star</Flex> <Progress value={staffStars?.two} max={staffStars?.total} colorScheme={'purple'} backgroundColor='white' borderRadius={'10px'} m='10px 0px' border={'1px solid'} borderColor='gray.100' w={'100%'}/><Flex fontSize='14px'>{staffStars?.two}/{staffStars?.total}</Flex></HStack>
        <HStack w='100%'><Flex w={'20%'} fontSize='13px'>Three star</Flex><Progress value={staffStars?.three} max={staffStars?.total} colorScheme={'purple'} backgroundColor='white' borderRadius={'10px'} m='10px 0px' border={'1px solid'} borderColor='gray.100' w={'100%'}/><Flex fontSize='14px'>{staffStars?.three}/{staffStars?.total}</Flex></HStack>
        <HStack w='100%'><Flex w={'20%'} fontSize='13px'>Four star</Flex><Progress value={staffStars?.four} max={staffStars?.total} colorScheme={'purple'} backgroundColor='white' borderRadius={'10px'} m='10px 0px' border={'1px solid'} borderColor='gray.100' w={'100%'}/><Flex fontSize='14px'> {staffStars?.four}/{staffStars?.total}</Flex></HStack>
        <HStack w='100%'><Flex w={'20%'} fontSize='13px'>Five star</Flex><Progress value={staffStars?.five} max={staffStars?.total} colorScheme={'purple'} backgroundColor='white' borderRadius={'10px'} m='10px 0px' border={'1px solid'} borderColor='gray.100' w={'100%'}/><Flex fontSize='14px'>{staffStars?.five}/{staffStars?.total}</Flex></HStack>
      </Flex>
      <Flex >
          <Grid gridTemplateColumns={'20% 10% 10% 10% 10% 40%'} w='100%' backgroundColor={'gray.600'} borderRadius={'20px 0px 20px 0px'} color='white'>       
          <GridItem pl='20px'>Name</GridItem>
          <GridItem>Mobile</GridItem>
          <GridItem>Counter staff rating</GridItem>
          <GridItem>Visit again rating</GridItem>
          <GridItem>Overall rating</GridItem>
          <GridItem>Additional comments</GridItem>
          </Grid>
            </Flex>
        {
          conent? conent.map((item)=>(
            <Flex >
          <Grid gridTemplateColumns={'20% 10% 10% 10% 10% 40%'} w='100%'>       
          <GridItem pl='20px'>{item.name}</GridItem>
          <GridItem>{item.mobile}</GridItem>
          <GridItem>{item.staff}</GridItem>
          <GridItem>{item.visitAgain}</GridItem>
          <GridItem>{item.overall}</GridItem>
          <GridItem>{item.comment?item.comment:''}</GridItem>
          </Grid>
            </Flex>
          
          )):''
        }   
        </Flex>
  )
}

export default App
