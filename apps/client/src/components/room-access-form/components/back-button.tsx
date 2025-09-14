// /**
//  * Back button component that navigates back to room creation/joining.
//  * Features:
//  * - Click handling
//  * - Disabled state support
//  * - Accessible button with label
//  *
//  * By Himanshu rana .
//  */

// import { ArrowLeft } from "lucide-react";

// import { Button } from "@/components/ui/button";

// interface BackButtonProps {
//   onClick: () => void;
//   disabled: boolean;
// }

// const BackButton = ({ onClick, disabled }: BackButtonProps) => (
//   <Button
//     variant="link"
//     className="text-foreground size-fit p-0"
//     size="sm"
//     onClick={onClick}
//     disabled={disabled}
//     aria-label="Back to create or join room page"
//   >
//     <ArrowLeft className="mr-2 size-4" aria-hidden="true" />
//     <span>Back to create/join room</span>
//   </Button>
// );

// export { BackButton };
"use client";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function BackButton({ onClick, disabled, className }: BackButtonProps) {
  return (
    <div className="mt-2 flex justify-center">
      <Button
        type="button"
        variant="ghost"
        onClick={onClick}
        disabled={disabled}
        className={className}
        aria-label="Go back"
      >
        {/* Keeping copy minimal and accessible; purely presentational */}
        Back
      </Button>
    </div>
  );
}
