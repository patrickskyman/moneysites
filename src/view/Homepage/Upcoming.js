import React from "react"
import AspectRatio from "@mui/joy/AspectRatio"
import Box from "@mui/joy/Box"
import Typography from "@mui/joy/Typography"
import Card from "@mui/joy/Card"
import Button from '@mui/joy/Button';

import { Link } from "react-router-dom"

function Upcoming() {

  return (
    <>
      <Card
        orientation="vertical"
        key=''
        variant="elevation"
        sx={theme => ({
          ...theme.variants.soft.success,
          color: "primary.400",
          verticalAlign: "text-top",
          gap: 2,
          "--Card-padding": theme => theme.spacing(1),
        })}
     
      >
        <Link to={`/`}>
          <AspectRatio
            ratio="1.5"
            variant="soft.success"
            sx={theme => ({
              ...theme.variants.soft.success,
              color: "primary.400",
              verticalAlign: "text-top",
              flexGrow: 1,
              minWidth: 250
            })}
          >
<h3>How to be <br/>
a beast in 
<br/>communication</h3>
          </AspectRatio>
        </Link>
        <Box sx={{ whiteSpace: "nowrap", paddingLeft: 1 }}>
          <Typography fontWeight="xl">
          <span>
          <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Enroll"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Enroll
          </Button>

              <Typography
                fontSize="md"
                borderRadius="sm"
                px={0.5}
                mr={0.5}
                sx={theme => ({
                  color: "success.400",
                  verticalAlign: "text-top"
                })}
              >
                <span style={{ marginLeft: "30px" }}>
                join 121 others
                </span>
              </Typography>
         
            </span>
          </Typography>
        </Box>
      </Card>

      <Card
        orientation="vertical"
        key=''
        variant="elevation"
        sx={theme => ({
          ...theme.variants.soft.success,
          color: "primary.400",
          verticalAlign: "text-top",
          gap: 2,
          "--Card-padding": theme => theme.spacing(1),
        })}
      >
        <Link to={`/`}>
          <AspectRatio
            ratio="1.5"
            variant="soft.success"
            sx={theme => ({
              ...theme.variants.soft.success,
              color: "primary.400",
              verticalAlign: "text-top",
              flexGrow: 1,
              minWidth: 250
            })}
          >
<h3>Best <br/>
Communication
<br/>strategies</h3>
          </AspectRatio>
        </Link>
        <Box sx={{ whiteSpace: "nowrap", paddingLeft: 1 }}>
          <Typography fontWeight="xl">
          <span>
          <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Enroll"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Enroll
          </Button>

              <Typography
                fontSize="md"
                borderRadius="sm"
                px={0.5}
                mr={0.5}
                sx={theme => ({
                  color: "success.400",
                  verticalAlign: "text-top"
                })}
              >
                <span style={{ marginLeft: "30px" }}>
                join 53 others
                </span>
              </Typography>
         
            </span>
          </Typography>
        </Box>
      </Card>

      <Card
        orientation="vertical"
        key=''
        variant="elevation"
        sx={theme => ({
          ...theme.variants.soft.success,
          color: "primary.400",
          verticalAlign: "text-top",
          gap: 2,
          "--Card-padding": theme => theme.spacing(1),
        })}
      >
        <Link to={`/`}>
          <AspectRatio
            ratio="1.5"
            variant="soft.success"
            sx={theme => ({
              ...theme.variants.soft.success,
              color: "primary.400",
              verticalAlign: "text-top",
              flexGrow: 1,
              minWidth: 250
            })}
          >
<h3>Saying no <br/>
to
<br/>stuttering</h3>
          </AspectRatio>
        </Link>
        <Box sx={{ whiteSpace: "nowrap", paddingLeft: 1 }}>
          <Typography fontWeight="xl">
          <span>
          <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Enroll"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Enroll
          </Button>

              <Typography
                fontSize="md"
                borderRadius="sm"
                px={0.5}
                mr={0.5}
                sx={theme => ({
                  color: "success.400",
                  verticalAlign: "text-top"
                })}
              >
                <span style={{ marginLeft: "30px" }}>
                join 88 others
                </span>
              </Typography>
         
            </span>
          </Typography>
        </Box>
      </Card>

      <Card
        orientation="vertical"
        key=''
        sx={theme => ({
          ...theme.variants.soft.success,
          color: "primary.400",
          verticalAlign: "text-top",
          gap: 2,
          "--Card-padding": theme => theme.spacing(1),
        })}
      >
        <Link to={`/`}>
          <AspectRatio
            ratio="1.5"
            variant="soft.success"
            sx={theme => ({
              ...theme.variants.soft.success,
              color: "primary.400",
              verticalAlign: "text-top",
              flexGrow: 1,
              minWidth: 250
            })}
          >
<h3>Overcoming <br/>
fear in
<br/>public speaking</h3>
          </AspectRatio>
        </Link>
        <Box sx={{ whiteSpace: "nowrap", paddingLeft: 1 }}>
          <Typography fontWeight="xl">
          <span>
          <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Enroll"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Enroll
          </Button>

              <Typography
                fontSize="md"
                borderRadius="sm"
                px={0.5}
                mr={0.5}
                sx={theme => ({
                  color: "success.400",
                  verticalAlign: "text-top"
                })}
              >
                <span style={{ marginLeft: "30px" }}>
                join 34 others
                </span>
              </Typography>
         
            </span>
          </Typography>
        </Box>
      </Card>

      <Card
        orientation="vertical"
        key=''
        variant="elevation"
        sx={theme => ({
          ...theme.variants.soft.success,
          color: "primary.400",
          verticalAlign: "text-top",
          gap: 2,
          "--Card-padding": theme => theme.spacing(1),
        })}
      >
        <Link to={`/`}>
          <AspectRatio
            ratio="1.5"
            variant="soft.success"
            sx={theme => ({
              ...theme.variants.soft.success,
              color: "primary.400",
              verticalAlign: "text-top",
              flexGrow: 1,
              minWidth: 250
            })}
          >
<h3>How I became<br/>
a public
<br/>speaking coach</h3>
          </AspectRatio>
        </Link>
        <Box sx={{ whiteSpace: "nowrap", paddingLeft: 1 }}>
          <Typography fontWeight="xl">
          <span>
          <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Enroll"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Enroll
          </Button>

              <Typography
                fontSize="md"
                borderRadius="sm"
                px={0.5}
                mr={0.5}
                sx={theme => ({
                  color: "success.400",
                  verticalAlign: "text-top"
                })}
              >
                <span style={{ marginLeft: "30px" }}>
                join 62 others
                </span>
              </Typography>
         
            </span>
          </Typography>
        </Box>
      </Card>
    </>
  )
}

export default Upcoming