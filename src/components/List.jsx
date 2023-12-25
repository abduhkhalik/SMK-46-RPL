import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function Lists({ data }) {
  const [usersData, setUsersData] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    setUsersData(data);
  }, [data]);

  const handleRoutes = (nama_lengkap) => {
    Navigate(`/users/${nama_lengkap}`);
  };

  return (
    <Card className="w-full">
      <List>
        {usersData.map((items) => (
          <ListItem key={items.id} onClick={() => handleRoutes(items.nama_lengkap)}>
            <ListItemPrefix>
              <Avatar
                variant="circular"
                alt="candice"
                src="https://docs.material-tailwind.com/img/face-1.jpg"
              />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                {items.nama_lengkap}
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                {items.email}
              </Typography>
            </div>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
