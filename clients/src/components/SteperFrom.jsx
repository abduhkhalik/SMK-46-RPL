import React from "react";
import {
  Card,
  Typography,
  Input,
  Stepper,
  Step,
  Button,
} from "@material-tailwind/react";

export function DefaultStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  return (
    <Card color="transparent" shadow={false}>
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>1</Step>
        <Step onClick={() => setActiveStep(1)}>2</Step>
        <Step onClick={() => setActiveStep(2)}>3</Step>
      </Stepper>
      <form
        action="/form/siswa"
        method="post"
        className="mt-8 mb-2 w-full max-w-screen-lg"
      >
        <div className="mb-1 flex flex-col gap-3">
          {activeStep === 0 && (
            <>
              <div className="flex flex-col justify-center items-center">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="text-center mt-8"
                >
                  Formulir Siswa
                </Typography>
              </div>
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
            </>
          )}
          {activeStep === 1 && (
            <>
              <div className="flex flex-col justify-center items-center">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="text-center mt-8"
                >
                  Formulir Sekolah
                </Typography>
              </div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Nama Sekolah
              </Typography>
              <Input
                size="lg"
                name="nama_sekolah"
                placeholder="Nama Sekolah"
                type="text"
                className=" w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Status Akreditas
              </Typography>
              <Input
                size="lg"
                type="text"
                name="akreditas"
                placeholder="Status Akreditas Sekolah Anda"
                className=" w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Nomor SKEP
              </Typography>
              <Input
                size="lg"
                type="number"
                name="ttl"
                placeholder="Nomor SKEP"
                className=" w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
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
            </>
          )}
          <div className="w-full py-4 px-8">
            <div className="mt-16 flex justify-between gap-5">
              <Button onClick={handlePrev} disabled={isFirstStep}>
                Prev
              </Button>
              <Button onClick={handleNext} disabled={isLastStep}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
}
