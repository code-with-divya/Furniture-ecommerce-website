import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import "./CatList.css"
import { ArrowDropDown } from '@mui/icons-material';

const data = [
    {
        title: 'Bed',
    },
    {
        title: 'Sofas',
    },
    {
        title: 'Chair',
    },
    {
        title: 'Table',
    },
    {
        title: 'TV Cabinet',
    },
    {
        title: 'Sectional Sofas',
    },
    {
        title: 'Trolley',
    },
    {
        title: 'Chest of Drawers',
    },
    {
        title: 'Office Chair',
    },
    {
        title: 'Stools',
    },
    {
        title: 'Work desks',
    },
    {
        title: 'Junior chairs',
    },
    {
        title: 'Dining sets',
    },
    {
        title: 'Wardrobe',
    },
    {
        title: 'Storage combination',
    },

];

export default function CatList() {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: 1,
                py: 1,
                overflow: 'auto',
                width: 1400,
                margin: 'auto',
                marginBottom: '5',
                zIndex: 2,
                position: 'fixed',
                backgroundColor: 'white',
                scrollSnapType: 'x mandatory',
                '& > *': {
                    scrollSnapAlign: 'center',
                },
                '::-webkit-scrollbar': { display: 'none' },
            }}

        >
            {data.map((item) => (
                <Card orientation="horizontal" size="sm" key={item.title} variant="outlined" className="catlist-cat">
                    <Box sx={{ whiteSpace: 'nowrap', mx: 1 }} >
                        <Typography level="title-md" className="catlist-cat-t">{item.title}<ArrowDropDown /></Typography>
                    </Box>
                </Card>
            ))}
        </Box>
    );
}
