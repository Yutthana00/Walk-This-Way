import React from 'react';
import { Image } from '@chakra-ui/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
} from '@chakra-ui/react';

import { useQuery } from "@apollo/client";

import { GET_POSTS } from "../utils/queries";

// const GetPosts = () => {
//   const { loading, data } = useQuery(GET_POSTS);
//   const posts = data?.posts || [];
//   if (!posts.length) {
//     return <h3>No Posts Yet</h3>
// };
// return (
//   <div>
//     {loading ? (
//       <div>Loading...</div>
//     ) : (
//       <div>
//         {posts?.length &&
//           posts.map((post) => (
//             <div key={post._id}>
//               <div>Location: {post.location}</div>
//               <div>Author: {post.author}</div>
//               <div>Image: {post.image}</div>
//               <div>Distance: {post.distance}</div>
//               <div>Description: {post.description}</div>
//               <div>URL: {post.website}</div>
//             </div>
//           ))}
//       </div>
//     )}
//   </div>
// );
// };

export default function getPosts() {
  return (
    <Center py={6}>

      <Box
        maxW={'445px'}
        w={'full'}
        // bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        backgroundColor={'black'}
        overflow={'hidden'}>

        <Box>
// text section
          <Text
          color={'green.500'}
          textTransform={'uppercase'}
          fontWeight={800}
          fontSize={'sm'}
          letterSpacing={1.1}>

          LOCATION

          </Text>
           
        </Box>

// main img
        <Box
          h={'250px'}
          bg={'gray.100'}
          mt={-10}
          mx={-6}
          mb={100}
          pos={'relative'}
          text={'white'}>

          <Image
            src={
              'https://images.pexels.com/photos/12366150/pexels-photo-12366150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }
            layout={'fill'}
          />
        </Box>

        <Box>
          <Text color={'white'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
        </Box>

// avatar section
        <Box>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'} textColor={'white'}>
            <Avatar
              // src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
              alt={'Author'}
            />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>Achim Rolle</Text>
              <Text color={'white'}>Feb 08, 2021 · 6min read</Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}

// export default card;


// const card = () => {

//     return (
//       <>
// {/* Card Background  */}
//       <Box sx={{ minHeight: 350,  }}>
//         <Card
//           variant="outlined"
//           sx={(theme) => ({
//             width: 300,
//             gridColumn: 'span 2',
//             flexDirection: 'row',
//             flexWrap: 'wrap',
//             resize: 'horizontal',
//             overflow: 'hidden',
//             backgroundColor: '#1a1a1a',
//             gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
//             transition: 'transform 0.3s, border 0.3s',
//             '&:hover': {
//               borderColor: theme.vars.palette.primary.outlinedHoverBorder,
//               transform: 'translateY(-2px)',
//             },
//             '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
//           })}
//         >
//           <AspectRatio
//             variant="soft"
//             sx={{
//               flexGrow: 1,
//               display: 'contents',
//               '--AspectRatio-paddingBottom':
//                 'clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))',
//             }}
//           >
//             <img
//               alt=""
//               src="https://images.pexels.com/photos/12366150/pexels-photo-12366150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//             />
//           </AspectRatio>
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               gap: 2,
//               maxWidth: '200px',
//             }}
//           >
// {/* Name of Location */}
//             <Box sx={{ display: 'flex' }}>
//               <div>
//                 <Typography level="h2" sx={{ fontSize: 'md' }} mb={0.5}>
//                   <Link
//                     href="#container-responsive"
//                     overlay
//                     underline="none"
//                     sx={{
//                       color: '#fff',
//                       '&.Mui-focusVisible:after': { outlineOffset: '-4px' },
//                     }}
//                   >
//                     Mount Saint Elias
//                   </Link>
//                 </Typography>
//                 <Typography level="body2">Alaska, USA</Typography>
//               </div>
  
//               {/* Avatar */}
//               <Avatar variant="soft" color="neutral" size="lg"
//                 color="neutral"
//                 sx={{ ml: 'auto', alignSelf: 'flex-start' }}>
//                 Y
//               </Avatar>
  
//             </Box>
//             <AspectRatio
//               variant="soft"
//               sx={{
//                 '--AspectRatio-paddingBottom':
//                   'clamp(0px, (100% - 200px) * 999, 200px)',
//                 pointerEvents: 'none',
//               }}
//             >

// {/* IMG upload */}
//               <img
//                 alt=""
//                 src="https://images.pexels.com/photos/12366150/pexels-photo-12366150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//               />
//             </AspectRatio>
//             <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
              
//               <div>
//                 <Typography
//                   sx={{
//                     color: '#fff',
//                     '&.Mui-focusVisible:after': { outlineOffset: '-4px' },
//                   }}
//                   level="body2"
//                 >
//                   Posted by
//                 </Typography>
//                 <Typography fontWeight="lg" level="body2">
//                   Team M
//                 </Typography>
//               </div>

// {/* Heart Button */}
//               <IconButton
//                 size="sm"
//                 variant="plain"
//                 color="neutral"
//                 sx={{ ml: 'auto', alignSelf: 'flex-start' }}
//               >
//                 <FavoriteBorderRoundedIcon color="danger" />
//               </IconButton>
// {/* Text Discription */}
//             </Box>
//             <Typography level="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
//           </Box>

//         </Card>
//       </Box>
//     </>
//     );
//   };
