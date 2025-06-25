import { CallToAction } from "client/src/components/CallToAction.tsx";
import { Hero } from "client/src/components/Hero.tsx";
import { TooltipProvider } from "/src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import { AuthProvider } from "client/src/components/auth/AuthForm.tsx";
import ProtectedRoute from "client/src/components/ProtectedRoute.tsx";
import Index from "./components/index/Index";
import Auth from "./client/src/hooks/useAuth.tsx";
import Dashboard from "./components/dashboard/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Switch>
            <Route path="/" component={Index} />
            <Route path="/auth" component={Auth} />
            <Route path="/dashboard">
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
