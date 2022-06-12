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
          