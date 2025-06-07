import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        warning:
          "border-orange-200 bg-orange-50 text-orange-800 [&>svg]:text-orange-600 dark:border-orange-800/50 dark:bg-orange-950 dark:text-orange-200 dark:[&>svg]:text-orange-400",
        success:
          "border-green-200 bg-green-50 text-green-800 [&>svg]:text-green-600 dark:border-green-800/50 dark:bg-green-950 dark:text-green-200 dark:[&>svg]:text-green-400",
        info:
          "border-blue-200 bg-blue-50 text-blue-800 [&>svg]:text-blue-600 dark:border-blue-800/50 dark:bg-blue-950 dark:text-blue-200 dark:[&>svg]:text-blue-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

// Additional Alert Dialog components for modal-style alerts
const AlertDialog = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(({ className, open = false, onOpenChange, children, ...props }, ref) => {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onOpenChange) {
        onOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange?.(false)}
      />
      
      {/* Dialog */}
      <div
        ref={ref}
        role="alertdialog"
        aria-modal="true"
        className={cn(
          "relative z-50 w-full max-w-lg mx-4 bg-white rounded-lg shadow-lg border animate-in fade-in-0 zoom-in-95 duration-200",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
});
AlertDialog.displayName = "AlertDialog";

const AlertDialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6", className)}
    {...props}
  />
));
AlertDialogContent.displayName = "AlertDialogContent";

const AlertDialogHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 text-center sm:text-left mb-4", className)}
    {...props}
  />
));
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-lg font-semibold text-gray-900", className)}
    {...props}
  />
));
AlertDialogTitle.displayName = "AlertDialogTitle";

const AlertDialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-600", className)}
    {...props}
  />
));
AlertDialogDescription.displayName = "AlertDialogDescription";

const AlertDialogFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
));
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogAction = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  }
>(({ className, variant = "default", ...props }, ref) => {
  const buttonVariants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
    link: "text-blue-600 underline-offset-4 hover:underline focus:ring-blue-500"
  };

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        buttonVariants[variant],
        className
      )}
      {...props}
    />
  );
});
AlertDialogAction.displayName = "AlertDialogAction";

const AlertDialogCancel = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <AlertDialogAction
    ref={ref}
    variant="outline"
    className={cn("mt-2 sm:mt-0", className)}
    {...props}
  />
));
AlertDialogCancel.displayName = "AlertDialogCancel";

export {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
};

// Hook for easy alert management
export function useAlert() {
  const [alerts, setAlerts] = React.useState<Array<{
    id: string;
    title?: string;
    description: string;
    variant?: "default" | "destructive" | "warning" | "success" | "info";
    duration?: number;
  }>>([]);

  const addAlert = React.useCallback((alert: {
    title?: string;
    description: string;
    variant?: "default" | "destructive" | "warning" | "success" | "info";
    duration?: number;
  }) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newAlert = { ...alert, id };
    
    setAlerts(prev => [...prev, newAlert]);

    // Auto-remove after duration (default 5 seconds)
    const duration = alert.duration ?? 5000;
    if (duration > 0) {
      setTimeout(() => {
        setAlerts(prev => prev.filter(a => a.id !== id));
      }, duration);
    }

    return id;
  }, []);

  const removeAlert = React.useCallback((id: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  }, []);

  const clearAlerts = React.useCallback(() => {
    setAlerts([]);
  }, []);

  return {
    alerts,
    addAlert,
    removeAlert,
    clearAlerts
  };
}

// Alert Provider for toast-style notifications
export function AlertProvider({ children }: { children: React.ReactNode }) {
  const { alerts, removeAlert } = useAlert();

  return (
    <>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            variant={alert.variant}
            className="min-w-[350px] shadow-lg animate-in slide-in-from-top-2 duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                {alert.title && <AlertTitle>{alert.title}</AlertTitle>}
                <AlertDescription>{alert.description}</AlertDescription>
              </div>
              <button
                onClick={() => removeAlert(alert.id)}
                className="ml-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="Close alert"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </Alert>
        ))}
      </div>
    </>
  );
}