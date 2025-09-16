// src/pages/LandingPage.jsx
import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
  Zoom,
  Fade,
  Paper,
  alpha,
  styled,
  IconButton,
  Drawer,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import {
  Apartment,
  Security,
  AutoAwesome,
  Star,
  Groups,
  TaskAlt,
  Public,
  ListAlt,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const GradientButton = styled(Button)(() => ({
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  borderRadius: "50px",
  padding: "10px 28px",
  fontSize: "1rem",
  fontWeight: "600",
  textTransform: "none",
  color: "#fff",
  boxShadow: "0 8px 20px rgba(102, 126, 234, 0.3)",
  "&:hover": {
    background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
    transform: "translateY(-3px)",
  },
}));

const LandingPage = () => {
  const navigate = useNavigate();
  const { user ,openLogoutDialog } = useContext(AuthContext);

  // ✅ State for animations
  const [statsVisible, setStatsVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Stats Section
  const stats = [
    {
      icon: <Groups sx={{ color: "#667eea" }} />,
      number: "100K+",
      label: "Organizations",
    },
    {
      icon: <TaskAlt sx={{ color: "#43e97b" }} />,
      number: "5M+",
      label: "Tasks Managed",
    },
    {
      icon: <Public sx={{ color: "#f093fb" }} />,
      number: "50+",
      label: "Countries",
    },
    {
      icon: <Star sx={{ color: "#fa709a" }} />,
      number: "4.9/5",
      label: "Customer Rating",
    },
  ];

  const menuItems = [
    { label: "Features", id: "features" },
    { label: "Pricing", id: "pricing" },
    { label: "Contact", id: "contact" },
  ];
  // ✅ Features
  const features = [
    {
      icon: <Apartment sx={{ fontSize: 48, color: "#667eea" }} />,
      title: "Multi-Tenant Support",
      description:
        "Manage multiple tenants with isolated data, user roles, and configurable settings per tenant.",
    },
    {
      icon: <Security sx={{ fontSize: 48, color: "#f093fb" }} />,
      title: "Secure Access Control",
      description:
        "Role-based permissions, JWT authentication, and secure data handling for all users.",
    },
    {
      icon: <ListAlt sx={{ fontSize: 48, color: "#fa709a" }} />,
      title: "Task Management",
      description:
        "Create, edit, delete, and complete todos with real-time updates and notifications.",
    },
    {
      icon: <AutoAwesome sx={{ fontSize: 48, color: "#a8edea" }} />,
      title: "Smart Productivity",
      description:
        "Prioritize tasks, track progress, and improve productivity with AI-powered suggestions.",
    },
  ];

  // Example data for 3 rows
  const sections = [
    {
      title: "Collaboration",
      description:
        "Communicate in countless ways from one place. Tenant is built for bringing people and information together. Type things out. Talk things through. Invite external organisations into the conversation. A GIF shows how people collaborate using channels in Slack. 80% of the Fortune 100 use TenantConnect to work with partners and customers.",
      imageUrl:
        "https://a.slack-edge.com/b5bbfef/marketing/img/homepage/revamped-24/mobile/value-props/image-collaboration.en-GB@2x.png",
    },
    {
      title: "Integration",
      description:
        "Connect the tools you already use into one central hub. Automate workflows and streamline your processes with seamless integrations. Keep everything organized and accessible from a single platform.",
      imageUrl:
        "https://a.slack-edge.com/b5bbfef/marketing/img/homepage/revamped-24/mobile/value-props/image-project-management.en-GB@2x.jpg",
    },
    {
      title: "Productivity",
      description:
        "Focus on what matters. Reduce distractions and manage tasks efficiently. Bring teams together to achieve more with shared spaces and real-time collaboration tools.",
      imageUrl:
        "https://a.slack-edge.com/b5bbfef/marketing/img/homepage/revamped-24/mobile/value-props/image-integrations.en-GB@2x.jpg",
    },
  ];
  // ✅ Pricing
  const pricingPlans = [
    {
      title: "Starter",
      price: "Free",
      description: "Best for individuals and small teams  started.",
      features: [
        "Up to 3 Tenants",
        "Basic Analytics",
        "Priority Support",
        ,
        "Community Support",
      ],
    },
    {
      title: "Pro",
      price: "$29/mo",
      description: "For growing organizations needing scalability.",
      features: [
        "Unlimited Tenants",
        "Advanced Analytics",
        "Priority Support",
        "Custom Branding",
      ],
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Tailored for large-scale organizations.",
      features: [
        "Dedicated Infrastructure",
        "Enterprise SSO",
        "Custom Integrations",
        "24/7 Support",
      ],
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#fff", color: "#111" }}>
      {/* ✅ Navbar */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "#fff",
          color: "#181212ff",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h5"
            sx={{ fontWeight: 900, color: "#667eea", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            MultiTenant
          </Typography>

          {/* Desktop Menu */}
          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={() => scrollToSection(item.id)}
                sx={{ fontWeight: 500 }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          {/* Right Action Button */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {!user ? (
              <GradientButton onClick={() => navigate("/login")}>
                Become A Tenant
              </GradientButton>
            ) : (
              <GradientButton
                onClick={() =>
                  navigate(user.role === "user" ? "/user/todos" : "/dashboard")
                }
              >
                Dashboard
              </GradientButton>
            )}
          </Box>

          {/* Mobile Hamburger */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <Box sx={{ width: 260, p: 3 }}>
            <Stack spacing={2}>
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  color="inherit"
                  onClick={() => {
                    setMobileOpen(false);
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </Button>
              ))}
              {!user ? (
                <GradientButton
                  fullWidth
                  onClick={() => {
                    setMobileOpen(false);
                    navigate("/login");
                  }}
                >
                  Get Started
                </GradientButton>
              ) : (
                <GradientButton
                  fullWidth
                  onClick={() => {
                    setMobileOpen(false);
                    navigate(
                      user.role === "user" ? "/user/todos" : "/dashboard"
                    );
                  }}
                >
                  Dashboard
                </GradientButton>
              )}
            </Stack>
          </Box>
        </Drawer>
      </AppBar>

      {/* ✅ Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
          pt: { xs: 10, md: 15 },
          pb: { xs: 10, md: 20 },
        }}
      >
        <Container maxWidth="lg">
          {/* Top Tag */}
          <Chip
            icon={<Star sx={{ color: "#fbc02d" }} />}
            label="Trusted by 100K+ organizations worldwide"
            sx={{
              mb: 3,
              px: 2,
              py: 0.5,
              fontSize: "0.9rem",
              fontWeight: 500,
              background: alpha("#1976d2", 0.08),
              color: "#1976d2",
              borderRadius: "8px",
            }}
          />

          {/* Main Heading */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.8rem", md: "4rem" },
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            Supercharge Your{" "}
            <Box component="span" sx={{ color: "#667eea" }}>
              Team Productivity
            </Box>{" "}
            with{" "}
            <Box component="span" sx={{ color: "#764ba2" }}>
              MultiTenant
            </Box>
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: "720px",
              mx: "auto",
              mb: 6,
              fontWeight: 400,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            MultiTenant is a modern multi-tenant platform that helps
            organizations manage{" "}
            <Box component="span" sx={{ fontWeight: 600, color: "#1976d2" }}>
              tasks, users, and workflows
            </Box>{" "}
            with simplicity and scale. Secure, lightning-fast, and AI-powered.
          </Typography>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 10 }}
          >
            {!user ? (
              <>
                <GradientButton onClick={() => navigate("/becometenant")}>
                  Become A Tenant
                </GradientButton>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ px: 4, borderRadius: "10px" }}
                  onClick={() => navigate("/register-under-tenant")}
                >
                  Register Under Tenant
                </Button>
                <Button
                  size="large"
                  sx={{ px: 4, borderRadius: "10px" }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </>
            ) : user.role === "user" ? (
              <GradientButton onClick={() => navigate("/user/todos")}>
                Go to Workspace
              </GradientButton>
            ) : (
              
              <>

              <GradientButton onClick={() => navigate("/dashboard")}>
                Go to Dashboard
              </GradientButton>
              <GradientButton onClick={openLogoutDialog}>
                Logout
              </GradientButton>
              
              </>
              
            )}
          </Stack>

          {/* Stats Section */}
          <Grid container spacing={3} justifyContent="center">
            {stats.map((stat, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Fade in={statsVisible} timeout={1000 + i * 400}>
                  <Paper
                    elevation={0}
                    sx={{
                      py: 5,
                      px: 3,
                      textAlign: "center",
                      borderRadius: 4,
                      border: "1px solid",
                      borderColor: "divider",
                      background: "#fff",
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontWeight={800}
                      gutterBottom
                      sx={{ color: "#1976d2" }}
                    >
                      {stat.icon} {stat.number}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Paper>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/*  Text and Image */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 12 } }}>
        {sections.map((section, index) => (
          <Grid
            container
            key={index}
            spacing={6}
            alignItems="center"
            sx={{ mb: 10 }}
          >
            <Grid
              container
              spacing={4} // space between text and image
              alignItems="center"
              sx={{ py: { xs: 4, md: 8 } }} // vertical padding
            >
              {/* Text Column */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: { xs: "center", md: "left" },
                  px: { xs: 2, md: 0 }, // horizontal padding on mobile
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                    color: "#111",
                    lineHeight: 1.3,
                  }}
                >
                  {section.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    color: "text.secondary",
                    lineHeight: 1.8,
                    fontSize: { xs: "1rem", md: "1.05rem" },
                    maxWidth: { md: "600px" }, // restrict width
                  }}
                >
                  {section.description}
                </Typography>

                <Link
                  to="/your-path"
                  underline="hover" // only underline on hover
                  sx={{
                    mt: 2,
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "#1976d2", // typical link color
                    alignSelf: { xs: "center", md: "flex-start" }, // responsive alignment
                    cursor: "pointer",
                  }}
                >
                  Learn More
                </Link>
              </Grid>

              {/* Image Column */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={section.imageUrl}
                  alt={section.title}
                  sx={{
                    width: "100%",
                    maxWidth: 500,
                    borderRadius: 3,
                    // boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Container>

      {/*text */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 6, md: 12 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 1200 }}>
          {/* Section Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: { xs: 4, md: 8 },
              textAlign: "center",
              color: "#111",
              fontSize: { xs: "1.8rem", md: "2.2rem" },
            }}
          >
            We’re in the business of growing businesses.
          </Typography>

          <Grid
            container
            spacing={0}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            {/* Left Statistic */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                borderTopLeftRadius: { xs: "20px", md: "40px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                px: 4,
                py: 4,
                minHeight: { md: "300px" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2.5rem", md: "3rem" },
                  mb: 2,
                }}
              >
                90%
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  maxWidth: { md: "220px" },
                }}
              >
                of users say that Tenant helps them stay more connected
              </Typography>
            </Grid>

            {/* Middle Statistic */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                backgroundColor: "#42a5f5",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                px: 4,
                py: 4,
                minHeight: { md: "300px" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2.5rem", md: "3rem" },
                  mb: 2,
                }}
              >
                89%
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  maxWidth: { md: "220px" },
                }}
              >
                of users say that Tenant improves communication
              </Typography>
            </Grid>

            {/* Right Statistic */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                backgroundColor: "#64b5f6",
                color: "#fff",
                borderTopRightRadius: { xs: "20px", md: "40px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                px: 4,
                py: 4,
                minHeight: { md: "300px" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2.5rem", md: "3rem" },
                  mb: 2,
                }}
              >
                36%
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.6,
                  maxWidth: { md: "220px" },
                }}
              >
                increase in employee engagement
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.2rem", md: "3rem" },
              fontWeight: 800,
              mb: 3,
              color: "#1976d2",
              lineHeight: 1.2,
            }}
          >
            Powerful Features
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: 720,
              mx: "auto",
              fontWeight: 400,
              lineHeight: 1.8,
              fontSize: { xs: "1rem", md: "1.15rem" },
            }}
          >
            Everything you need to build, scale, and manage your organization's
            productivity — all in one clean and simple platform.
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
          {features.map((feature, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Zoom in timeout={700 + index * 200}>
                <Card
                  sx={{
                    flex: 1,
                    maxWidth: 360,
                    borderRadius: 4,
                    boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 36px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: { xs: 4, md: 5 },
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 3,
                        background: alpha("#1976d2", 0.1),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                        color: "#1976d2",
                        fontSize: 30,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                      }}
                    >
                      {feature.icon}
                    </Box>

                    {/* Feature Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 1.5,
                        color: "#111",
                        fontSize: { xs: "1.25rem", md: "1.4rem" },
                      }}
                    >
                      {feature.title}
                    </Typography>

                    {/* Feature Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.7,
                        flexGrow: 1,
                        fontSize: "0.95rem",
                      }}
                    >
                      {feature.description}
                    </Typography>

                    {/* Learn More CTA */}
                    <Button
                      variant="text"
                      sx={{
                        mt: 3,
                        p: 0,
                        color: "#1976d2",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        textTransform: "none",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "#115293",
                        },
                      }}
                    >
                      Learn More →
                    </Button>
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ✅ Pricing Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }} id="pricing">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.2rem", md: "3rem" },
              fontWeight: 800,
              mb: 3,
              color: "#667eea",
            }}
          >
            Simple Pricing
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: 700,
              mx: "auto",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Choose the plan that works best for your organization.
          </Typography>
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={6} justifyContent="center">
          {pricingPlans.map((plan, i) => {
            const isPopular = plan.title === "Pro"; // highlight Pro plan
            return (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: isPopular
                      ? "0 12px 40px rgba(102, 126, 234, 0.35)"
                      : "0 6px 20px rgba(0,0,0,0.08)",
                    border: isPopular
                      ? `2px solid ${alpha("#667eea", 0.5)}`
                      : "1px solid rgba(0,0,0,0.08)",
                    transform: isPopular ? "scale(1.05)" : "none",
                    transition: "all 0.3s ease",
                    "&:hover": { transform: "translateY(-5px)", boxShadow: 12 },
                  }}
                >
                  <CardContent sx={{ p: 5, textAlign: "center" }}>
                    {/* Plan Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: isPopular ? "#667eea" : "text.primary",
                      }}
                    >
                      {plan.title}
                    </Typography>

                    {/* Price */}
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        mb: 2,
                        color: isPopular ? "#764ba2" : "text.primary",
                      }}
                    >
                      {plan.price}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 3 }}
                    >
                      {plan.description}
                    </Typography>

                    {/* Features List */}
                    <Stack spacing={1.5} sx={{ mb: 4 }}>
                      {plan.features.map((f, j) => (
                        <Typography
                          key={j}
                          variant="body2"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            fontWeight: 500,
                          }}
                        >
                          <Box component="span" sx={{ color: "#4caf50" }}>
                            ✅
                          </Box>
                          {f}
                        </Typography>
                      ))}
                    </Stack>

                    {/* CTA Button */}
                    <GradientButton sx={{ px: 5, py: 1.5 }}>
                      Get Started
                    </GradientButton>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* ✅ Footer */}
      <Box
        component="footer"
        sx={{
          py: { xs: 8, md: 12 },
          borderTop: "1px solid rgba(0,0,0,0.1)",
          mt: 10,
          backgroundColor: "#f8f9fa",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 4 }}>
            {/* Logo + Tagline */}
            <Grid item xs={12} md={3}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, mb: 2, color: "#667eea" }}
              >
                Siga Systems
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mb: 3 }}
              >
                Building modern SaaS platforms for productivity, collaboration,
                and scalable solutions.
              </Typography>
              <Stack direction="row" spacing={1.5}>
                <IconButton
                  component={Link}
                  href="https://twitter.com"
                  target="_blank"
                  sx={{
                    color: "#1DA1F2",
                    bgcolor: alpha("#1DA1F2", 0.1),
                    "&:hover": { bgcolor: alpha("#1DA1F2", 0.2) },
                  }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://linkedin.com"
                  target="_blank"
                  sx={{
                    color: "#0A66C2",
                    bgcolor: alpha("#0A66C2", 0.1),
                    "&:hover": { bgcolor: alpha("#0A66C2", 0.2) },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://github.com"
                  target="_blank"
                  sx={{
                    color: "#000",
                    bgcolor: alpha("#000", 0.05),
                    "&:hover": { bgcolor: alpha("#000", 0.1) },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </Stack>
            </Grid>

            {/* Navigation Sections */}
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Docs"],
              },
              {
                title: "Company",
                links: ["About", "Careers", "Contact"],
              },
              {
                title: "Resources",
                links: ["Blog", "Help Center", "API Docs"],
              },
              {
                title: "Legal",
                links: ["Terms of Service", "Privacy Policy", "Security"],
              },
            ].map((section, i) => (
              <Grid item xs={6} md={2} key={i}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                  {section.title}
                </Typography>
                <Stack spacing={1}>
                  {section.links.map((link, j) => (
                    <Link
                      key={j}
                      href="#"
                      underline="none"
                      color="text.secondary"
                      sx={{
                        "&:hover": { color: "#1976d2" },
                        display: "block",
                        fontSize: "0.95rem",
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>

          {/* Bottom Row */}
          <Box
            sx={{
              textAlign: "center",
              mt: 8,
              color: "text.secondary",
              fontSize: "0.9rem",
            }}
          >
            &copy; {new Date().getFullYear()} Siga Systems Pvt. Ltd. All rights
            reserved. | Designed with ❤️ using React & MUI
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;





// import React, { useState, useEffect } from 'react';
// import {
//   ChevronRight,
//   Menu,
//   X,
//   Shield,
//   Users,
//   Zap,
//   TrendingUp,
//   Star,
//   Check,
//   ArrowRight,
//   Globe,
//   BarChart3,
//   Lock,
//   Rocket,
//   Play,
//   Award,
//   Building,
//   Sparkles,
//   Target,
// } from 'lucide-react';
// import { motion } from 'framer-motion';
// import e from 'cors';

// const LandingPage = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const features = [
//     {
//       icon: <Building className="w-8 h-8" />,
//       title: 'Multi-Tenant Architecture',
//       description:
//         'Secure, isolated workspaces for each organization with full customization options.',
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: 'Enterprise Security',
//       description:
//         'SSO, SOC2, GDPR, HIPAA compliance with bank-level encryption built-in.',
//     },
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: 'Lightning Performance',
//       description:
//         'Global CDN, edge caching, and optimized databases for sub-second response times.',
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: 'Collaboration First',
//       description:
//         'Real-time sync, shared dashboards, team chat, and smart notifications.',
//     },
//     {
//       icon: <BarChart3 className="w-8 h-8" />,
//       title: 'Analytics & Insights',
//       description:
//         'Customizable dashboards powered by AI with actionable business intelligence.',
//     },
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: 'Global Scale',
//       description:
//         'Elastic infrastructure that scales automatically to millions of users worldwide.',
//     },
//   ];

//   const stats = [
//     { number: '500K+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
//     { number: '99.9%', label: 'Uptime SLA', icon: <TrendingUp className="w-6 h-6" /> },
//     { number: '150+', label: 'Countries', icon: <Globe className="w-6 h-6" /> },
//     { number: '4.9/5', label: 'User Rating', icon: <Star className="w-6 h-6" /> },
//   ];

//   const pricingPlans = [
//     {
//       name: 'Starter',
//       price: 'Free',
//       description: 'For small teams exploring our platform',
//       features: ['5 team members', '10GB storage', 'Email support', 'Basic analytics'],
//       cta: 'Get Started',
//     },
//     {
//       name: 'Professional',
//       price: '$29/user/mo',
//       description: 'Advanced features for scaling teams',
//       features: [
//         'Unlimited members',
//         '100GB storage/user',
//         'Priority support',
//         'Custom integrations',
//       ],
//       cta: 'Start Free Trial',
//       popular: true,
//     },
//     {
//       name: 'Enterprise',
//       price: 'Custom',
//       description: 'Custom solutions for enterprises',
//       features: [
//         'Dedicated infra',
//         '24/7 phone support',
//         'Custom SLAs',
//         'Advanced compliance',
//       ],
//       cta: 'Contact Sales',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navbar */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                 <Sparkles className="w-5 h-5 text-white" />
//               </div>
//               <span className="font-bold text-xl text-gray-900">MultiTenant</span>
//             </div>
//             <div className="hidden md:flex space-x-8 items-center">
//               {['Features', 'Pricing', 'Customers', 'Resources'].map((item) => (
//                 <button
//                   key={item}
//                   className="text-gray-600 hover:text-blue-600 text-sm font-medium"
//                 >
//                   {item}
//                 </button>
//               ))}
//               <button className="text-gray-600 hover:text-blue-600">Sign In</button>
//               <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg hover:shadow-lg font-medium">
//                 Get Started
//               </button>
//             </div>
//             <div className="md:hidden">
//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="p-2 text-gray-700"
//               >
//                 {mobileMenuOpen ? <X /> : <Menu />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-8">
//               <Award className="w-4 h-4 mr-2" /> Trusted by 500K+ users
//             </div>
//             <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
//               Scale Your SaaS <br />
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Without Limits
//               </span>
//             </h1>
//             <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
//               The most advanced multi-tenant SaaS platform. Secure, scalable, and designed for
//               the future of work.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//               <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl flex items-center justify-center">
//                 Start Free Trial <ChevronRight className="ml-2 w-5 h-5" />
//               </button>
//               <button className="flex items-center text-gray-700 hover:text-blue-600">
//                 <Play className="mr-2 w-6 h-6 text-blue-600" /> Watch Demo
//               </button>
//             </div>
//           </motion.div>

//           {/* Dashboard Preview */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="mt-20 bg-white rounded-2xl shadow-2xl overflow-hidden"
//           >
//             <div className="grid md:grid-cols-2 gap-0">
//               <div className="p-8 flex flex-col justify-center bg-gray-50">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   Powerful Analytics Dashboard
//                 </h3>
//                 <p className="text-gray-600 mb-6">
//                   Get real-time insights into tenant usage, performance, and growth metrics with
//                   customizable reports.
//                 </p>
//                 <ul className="space-y-3 text-gray-700">
//                   <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> Tenant-level usage</li>
//                   <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> Revenue analytics</li>
//                   <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> Growth trends</li>
//                 </ul>
//               </div>
//               <div className="p-8 bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center">
//                 <div className="w-full max-w-sm bg-white shadow-lg rounded-xl p-6">
//                   <h4 className="font-semibold mb-4">Sample Dashboard</h4>
//                   <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4"></div>
//                   <div className="grid grid-cols-3 gap-4 text-center">
//                     <div>
//                       <p className="text-2xl font-bold text-gray-900">120K</p>
//                       <p className="text-sm text-gray-600">Active Tenants</p>
//                     </div>
//                     <div>
//                       <p className="text-2xl font-bold text-gray-900">$2.3M</p>
//                       <p className="text-sm text-gray-600">MRR</p>
//                     </div>
//                     <div>
//                       <p className="text-2xl font-bold text-gray-900">98%</p>
//                       <p className="text-sm text-gray-600">Retention</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Features */}
//       <section id="features" className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">Features Built to Scale</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Every feature you need to grow securely, performantly, and collaboratively.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {features.map((f, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -6 }}
//                 className="p-8 rounded-2xl shadow-lg hover:shadow-2xl bg-white border border-gray-100"
//               >
//                 <div className="mb-6 p-3 rounded-xl bg-blue-50 text-blue-600 inline-flex">
//                   {f.icon}
//                 </div>
//                 <h3 className="font-bold text-xl mb-3">{f.title}</h3>
//                 <p className="text-gray-600">{f.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing */}
//       <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h2>
//           <p className="text-lg text-gray-600 mb-16">Start free, scale as you grow.</p>
//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {pricingPlans.map((plan, i) => (
//               <div
//                 key={i}
//                 className={`p-8 rounded-2xl shadow-lg bg-white border relative ${
//                   plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
//                 }`}
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//                     <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}
//                 <h3 className="font-bold text-2xl mb-4">{plan.name}</h3>
//                 <p className="text-3xl font-bold mb-4">{plan.price}</p>
//                 <p className="text-gray-600 mb-6">{plan.description}</p>
//                 <ul className="space-y-3 text-gray-700 mb-8 text-left">
//                   {plan.features.map((f, idx) => (
//                     <li key={idx} className="flex items-center">
//                       <Check className="w-5 h-5 text-green-500 mr-2" /> {f}
//                     </li>
//                   ))}
//                 </ul>
//                 <button
//                   className={`w-full py-3 rounded-xl font-semibold transition-all ${
//                     plan.popular
//                       ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
//                       : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
//                   }`}
//                 >
//                   {plan.cta}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-center text-white">
//         <div className="max-w-3xl mx-auto px-4">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Ready to Transform Your SaaS?
//           </h2>
//           <p className="text-lg mb-12">
//             Start your free trial today and see why thousands of teams trust MultiTenant.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//             <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl">
//               Start Free Trial <Rocket className="ml-2 inline w-5 h-5" />
//             </button>
//             <button className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10">
//               Schedule Demo
//             </button>
//           </div>
//         </div>
//       </section>

     
               

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8 mb-12">
//             {/* Company Info */}
//             <div>
//               <div className="flex items-center space-x-2 mb-6">
//                 <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                   <Sparkles className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="text-xl font-bold">MultiTenant</span>
//               </div>
//               <p className="text-gray-400 mb-6 leading-relaxed">
//                 Building the future of multi-tenant SaaS platforms. Secure, scalable, and built for modern businesses.
//               </p>
//               <div className="flex space-x-4">
//                 {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
//                   <button key={social} className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
//                     <span className="text-xs">{social[0]}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Quick Links */}
//             {[
//               {
//                 title: 'Product',
//                 links: ['Features', 'Pricing', 'Security', 'Integrations', 'API Docs']
//               },
//               {
//                 title: 'Company',
//                 links: ['About', 'Careers', 'Press', 'Partners', 'Contact']
//               },
//               {
//                 title: 'Resources',
//                 links: ['Blog', 'Help Center', 'Community', 'Webinars', 'Status']
//               }
//             ].map((section, index) => (
//               <div key={index}>
//                 <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
//                 <ul className="space-y-3">
//                   {section.links.map((link) => (
//                     <li key={link}>
//                       <button className="text-gray-400 hover:text-white transition-colors">
//                         {link}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
//             <p className="text-gray-400 text-sm mb-4 md:mb-0">
//               © 2024 MultiTenant. All rights reserved.
//             </p>
//             <div className="flex items-center space-x-6 text-sm text-gray-400">
//               <button className="hover:text-white transition-colors">Privacy Policy</button>
//               <button className="hover:text-white transition-colors">Terms of Service</button>
//               <button className="hover:text-white transition-colors">Cookie Policy</button>
//             </div>
//           </div>
//         </div>
//       </footer>
//   </div>)};


// export default LandingPage;