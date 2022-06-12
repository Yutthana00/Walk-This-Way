import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';


export default function ContainerResponsive() {
    return (
      // Card Background
      <Box sx={{ minHeight: 350 }}>
        <Card
          variant="outlined"
          sx={(theme) => ({
            width: 300,
            gridColumn: 'span 2',
            flexDirection: 'row',
            flexWrap: 'wrap',
            resize: 'horizontal',
            overflow: 'hidden',
            backgroundColor: '#1a1a1a',
            gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
            transition: 'transform 0.3s, border 0.3s',
            '&:hover': {
              borderColor: theme.vars.palette.primary.outlinedHoverBorder,
              transform: 'translateY(-2px)',
            },
            '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
          })}
        >
          <AspectRatio
            variant="soft"
            sx={{
              flexGrow: 1,
              display: 'contents',
              '--AspectRatio-paddingBottom':
                'clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))',
            }}
          >
            <img
              alt=""
              src="https://images.pexels.com/photos/12366150/pexels-photo-12366150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </AspectRatio>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              maxWidth: '200px',
            }}
          >
            {/* Name of Location */}
            <Box sx={{ display: 'flex' }}>
              <div>
                <Typography level="h2" sx={{ fontSize: 'md' }} mb={0.5}>
                  <Link
                    href="#container-responsive"
                    overlay
                    underline="none"
                    sx={{
                      color: '#fff',
                      '&.Mui-focusVisible:after': { outlineOffset: '-4px' },
                    }}
                  >
                    Mount Saint Elias
                  </Link>
                </Typography>
                <Typography level="body2">Alaska, USA</Typography>
              </div>
  
              {/* Avatar */}
              <Avatar variant="soft" color="neutral" size="lg"
                color="neutral"
                sx={{ ml: 'auto', alignSelf: 'flex-start' }}>
                Y
              </Avatar>
  
            </Box>
            <AspectRatio
              variant="soft"
              sx={{
                '--AspectRatio-paddingBottom':
                  'clamp(0px, (100% - 200px) * 999, 200px)',
                pointerEvents: 'none',
              }}
            >
              {/* IMG upload */}
              <img
                alt=""
                src="https://images.pexels.com/photos/12366150/pexels-photo-12366150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            </AspectRatio>
            <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
              
              <div>
                <Typography
                  sx={{
                    color: '#fff',
                    '&.Mui-focusVisible:after': { outlineOffset: '-4px' },
                  }}
                  level="body2"
                >
                  Posted by
                </Typography>
                <Typography fontWeight="lg" level="body2">
                  Team M
                </Typography>
              </div>
              {/* Heart Button */}
              <IconButton
                size="sm"
                variant="plain"
                color="neutral"
                sx={{ ml: 'auto', alignSelf: 'flex-start' }}
              >
                <FavoriteBorderRoundedIcon color="danger" />
              </IconButton>
            </Box>
            <Typography level="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
          </Box>
        </Card>
      </Box>
    );
  }
  