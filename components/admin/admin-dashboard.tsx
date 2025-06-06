"use client";

import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/lib/supabase-provider";
import { LogOut } from "lucide-react";
import { SiteSettingsForm } from "./site-settings-form";
import { ApiKeyManagement } from "./api-key-management";
import { BrandSettings } from "./brand-settings";

interface AdminDashboardProps {
  user: User;
}

export default function AdminDashboard({ user }: AdminDashboardProps) {
  const router = useRouter();
  const { supabase } = useSupabase();
  const [activeTab, setActiveTab] = useState("site-settings");

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Logged in as {user.email}
          </p>
        </div>
        <Button variant="outline" onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>

      <Tabs 
        value={activeTab} 
        onValueChange={setActiveTab} 
        className="space-y-4"
      >
        <TabsList className="grid grid-cols-3 lg:w-[600px]">
          <TabsTrigger value="site-settings">Site Settings</TabsTrigger>
          <TabsTrigger value="brand-settings">Brand & RTL</TabsTrigger>
          <TabsTrigger value="api-keys">API Keys</TabsTrigger>
        </TabsList>
        
        <TabsContent value="site-settings" className="space-y-4">
          <SiteSettingsForm />
        </TabsContent>
        
        <TabsContent value="brand-settings" className="space-y-4">
          <BrandSettings />
        </TabsContent>
        
        <TabsContent value="api-keys" className="space-y-4">
          <ApiKeyManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
}