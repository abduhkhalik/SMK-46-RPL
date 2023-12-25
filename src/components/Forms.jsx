import {
  Card,
  Input,
  Select,
  Button,
  Option,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function FormDaftar() {
  return (
    <Card color="transparent" shadow={false}>
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://www.smkn46jaktim.sch.id/images/logo.png"
          alt="SMK 46 RPL"
          className="w-16 h-16"
        />
        <Typography variant="h4" color="blue-gray" className="text-center">
          SMK 46 RPL
        </Typography>
      </div>
      <form
        action="/daftar"
        method="post"
        className="mt-8 mb-2 w-full max-w-screen-lg"
      >
        <div className="mb-1 flex flex-col gap-3">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Nama Lengkap
          </Typography>
          <Input
            size="lg"
            name="nama_lengkap"
            placeholder="Nama Lengkap"
            type="text"
            className=" w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            type="email"
            name="email"
            placeholder="name@mail.com"
            className=" w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            name="password"
            size="lg"
            placeholder="********"
            className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <div className="flex justify-center items-center gap-5">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Sekolah
              </Typography>
              <Input
                type="text"
                name="sekolah"
                size="lg"
                placeholder="SMK 46 RPL"
                className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Kelas
              </Typography>
              <Select name="kelas" className="w-full" label="Pilih Kelas">
                <Option>Kelas 10</Option>
                <Option>Kelas 11</Option>
                <Option>Kelas 12</Option>
              </Select>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Alamat
              </Typography>
              <Input
                type="text"
                name="alamat"
                size="lg"
                placeholder="Masukan Alamat Anda"
                className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Kelurahan
              </Typography>
              <Select name="kelurahan" label="Pilih Kelurahan">
                <Option>Cijantung</Option>
                <Option>Beji</Option>
              </Select>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Kecamatan
              </Typography>
              <Select
                name="kecamatan"
                className="w-full"
                label="Pilih Kecamatan"
              >
                <Option>Pasar Rebo</Option>
                <Option>Beji</Option>
              </Select>
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Kabupaten
              </Typography>
              <Select
                name="kabupaten"
                className="w-full"
                label="Pilih Kabupaten"
              >
                <Option>Jakarta Timur</Option>
                <Option>Depok</Option>
              </Select>
            </div>
          </div>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            Provinsi
          </Typography>
          <Select name="provinsi" className="w-full" label="Pilih provinsi">
            <Option>Kelas 10</Option>
            <Option>Kelas 11</Option>
            <Option>Kelas 12</Option>
          </Select>
        </div>

        <Button className="mt-6 w-full">Daftar</Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Sudah Punya Akun?{" "}
          <Link to={"/login"} className="font-medium text-gray-900">
            Login
          </Link>
        </Typography>
      </form>
    </Card>
  );
}

// eslint-disable-next-line react/prop-types
export function FormLogin({ users }) {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    setUser(users);
  }, [users]);

  console.log();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      user.find((items) => {
        items.email === email && items.password === password
          ? Navigate("/")
          : "User Tidak Di temukan";
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://www.smkn46jaktim.sch.id/images/logo.png"
          alt="SMK 46 RPL"
          className="w-16 h-16"
        />
        <Typography variant="h4" color="blue-gray" className="text-center">
          SMK 46 RPL
        </Typography>
      </div>
      <form
        action="/login"
        method="post"
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            onChange={(e) => setEmail(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <Button
          className="mt-6"
          fullWidth
          type="submit"
          onClick={(e) => handleLogin(e)}
        >
          Masuk
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Belum Punya Akun?{" "}
          <Link to={"/daftar"} className="font-medium text-gray-900">
            Daftar
          </Link>
        </Typography>
      </form>
    </Card>
  );
}

export function DataUsers() {
  // const { id } = useParams();
  // const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   setUserData(id );
  // }, [id]);

  // console.log(userData);

  return (
    <Card color="transparent" shadow={false}>
      <div className="flex flex-col justify-center items-center">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Data User
        </Typography>
      </div>
      <div className="mt-8 mb-2 w-full max-w-screen-lg">
        <div className="mb-1 flex flex-col gap-3">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Nama Lengkap
          </Typography>
          <Input
            size="lg"
            // value={userData.nama_lengkap}
            disabled
            name="nama_lengkap"
            placeholder="Nama Lengkap"
            type="text"
            className=" w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            // value={userData}
            type="email"
            name="email"
            disabled
            placeholder="name@mail.com"
            className=" w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            name="password"
            disabled
            size="lg"
            placeholder="********"
            className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <div className="flex justify-center items-center gap-5">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Sekolah
              </Typography>
              <Input
                type="text"
                name="sekolah"
                disabled
                size="lg"
                placeholder="SMK 46 RPL"
                className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Kelas
              </Typography>
              <Select
                disabled
                name="kelas"
                className="w-full"
                label="Pilih Kelas"
              >
                <Option>Kelas 10</Option>
                <Option>Kelas 11</Option>
                <Option>Kelas 12</Option>
              </Select>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Alamat
              </Typography>
              <Input
                type="text"
                name="alamat"
                size="lg"
                placeholder="Masukan Alamat Anda"
                className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Kelurahan
              </Typography>
              <Select name="kelurahan" label="Pilih Kelurahan">
                <Option>Cijantung</Option>
                <Option>Beji</Option>
              </Select>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Kecamatan
              </Typography>
              <Select
                name="kecamatan"
                className="w-full"
                label="Pilih Kecamatan"
              >
                <Option>Pasar Rebo</Option>
                <Option>Beji</Option>
              </Select>
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Kabupaten
              </Typography>
              <Select
                name="kabupaten"
                className="w-full"
                label="Pilih Kabupaten"
              >
                <Option>Jakarta Timur</Option>
                <Option>Depok</Option>
              </Select>
            </div>
          </div>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            Provinsi
          </Typography>
          <Select name="provinsi" className="w-full" label="Pilih provinsi">
            <Option>Kelas 10</Option>
            <Option>Kelas 11</Option>
            <Option>Kelas 12</Option>
          </Select>
        </div>
      </div>
    </Card>
  );
}

export function FormSiswa() {
  return (
    <Card color="transparent" shadow={false}>
      <div className="flex flex-col justify-center items-center">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Formulir Siswa
        </Typography>
      </div>
      <form
        action="/daftar"
        method="post"
        className="mt-8 mb-2 w-full max-w-screen-lg"
      >
        <div className="mb-1 flex flex-col gap-3">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Nama Lengkap
          </Typography>
          <Input
            size="lg"
            name="nama_lengkap"
            placeholder="Nama Lengkap"
            type="text"
            className=" w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            NIS
          </Typography>
          <Input
            size="lg"
            type="number"
            name="nis"
            placeholder="Masukan NIS Anda"
            className=" w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Tempat Tanggal Lahir
          </Typography>
          <Input
            size="lg"
            type="text"
            name="ttl"
            placeholder="Depok 12/12/1999"
            className=" w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Umur
          </Typography>
          <Input
            type="number"
            name="umur"
            size="lg"
            placeholder="Masukan Umur Anda"
            className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <div className="flex justify-center items-center gap-5">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Alamat
              </Typography>
              <Input
                type="text"
                name="alamat"
                size="lg"
                placeholder="Masukan Alamat Anda"
                className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Kelurahan
              </Typography>
              <Input
                type="text"
                name="kelurahan"
                size="lg"
                placeholder="Masukan Kelurahan Anda"
                className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Kecamatan
              </Typography>
              <Input
                type="text"
                name="kecamatan"
                size="lg"
                placeholder="Masukan Kecamatan Anda"
                className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Kabupaten
              </Typography>
              <Input
                type="text"
                name="kabupaten"
                size="lg"
                placeholder="Masukan Alamat Anda"
                className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            Provinsi
          </Typography>
          <Input
            type="text"
            name="provinsi"
            size="lg"
            placeholder="Masukan Provinsi Anda"
            className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <div className="flex justify-center items-center gap-5">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Kode Kelurahan
              </Typography>
              <Input
                type="number"
                name="kode_kelurahan"
                size="lg"
                placeholder="Kode Kelurahan"
                className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Kode Kecamatan
              </Typography>
              <Input
                type="number"
                name="kode_kecamatan"
                size="lg"
                placeholder="Kode Kecamatan"
                className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Kode Kabupaten
              </Typography>
              <Input
                type="number"
                name="kode_kabupaten"
                size="lg"
                placeholder="Kode Kecamatan"
                className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Kode Provinsi
              </Typography>
              <Input
                type="number"
                name="kode_provinsi"
                size="lg"
                placeholder="Kode Kecamatan"
                className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
        </div>

        <Button className="mt-6 w-full">Selanjutnya</Button>
      </form>
    </Card>
  );
}
