import { Box, Card, CardContent, Typography } from "@mui/material";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import type { SectorIcon } from "../../data/sectors";
import { brand } from "../../../theme/premiumTheme";

const sectorIcons: Record<SectorIcon, React.ReactNode> = {
  "global-trade": <LocalShippingOutlinedIcon />,
  hospitality: <HotelOutlinedIcon />,
  "real-estate": <ApartmentOutlinedIcon />,
  education: <SchoolOutlinedIcon />,
  floriculture: <LocalFloristOutlinedIcon />,
  media: <CampaignOutlinedIcon />,
  finance: <Diversity3OutlinedIcon />,
  recruitment: <WorkOutlineOutlinedIcon />,
  foundation: <FavoriteBorderOutlinedIcon />,
};

type SectorCardProps = {
  index?: number;
  title: string;
  summary: string;
  icon: SectorIcon;
};

export function SectorCard({ index, title, summary, icon }: SectorCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        bgcolor: brand.paper,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          bgcolor: brand.gold,
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s ease",
        },
        "&:hover::before": {
          transform: "scaleX(1)",
        },
      }}
    >
      <CardContent sx={{ p: 3.5 }}>
        <Box
          sx={{
            width: 52,
            height: 52,
            border: `1px solid ${brand.gold}`,
            color: brand.goldDark,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2.5,
            bgcolor: `${brand.gold}14`,
          }}
        >
          {sectorIcons[icon]}
        </Box>
        {index !== undefined && (
          <Typography variant="caption" sx={{ color: brand.goldDark, letterSpacing: "0.2em", fontWeight: 600, display: "block", mb: 1 }}>
            {String(index + 1).padStart(2, "0")}
          </Typography>
        )}
        <Typography variant="h6" sx={{ mb: 1.25, fontFamily: "Cinzel, serif", fontWeight: 500, fontSize: "1.05rem", color: brand.ink }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.75, color: brand.slate }}>
          {summary}
        </Typography>
      </CardContent>
    </Card>
  );
}
