import { useAuth } from "@/hooks/use-auth";
import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter()
    const { logout } = useAuth();

    async function handleLogout() {
        try {
            await logout();
            // router.push('/sign-in')
        } catch (error) {
            console.log('failed to logout', error)
        }
    }
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    Dashboard
                </Typography>
                <nav>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Features
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Enterprise
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Support
                    </Link>
                </nav>
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;